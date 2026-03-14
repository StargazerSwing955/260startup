//mostly copied from Simon
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();

const authCookieName = 'token';

let users = []; 
//users should consist of {username, password, petState, score} to then be easily displayed on leaderboard

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await findUser('username', req.body.username)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const userInfo= await createUser(req.body.username, req.body.password);

    setAuthCookie(res, userInfo.token);
    res.send({ username:userInfo.username });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const userInfo= await findUser('username', req.body.username);
  if (userInfo) {
    if (await bcrypt.compare(req.body.password, userInfo.password)) {
     userInfo.token = uuid.v4();
      setAuthCookie(res, userInfo.token);
      res.send({ username: userInfo.username });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', async (req, res) => {
  const userInfo = await findUser('token', req.cookies[authCookieName]);
  if (userInfo) {
    delete userInfo.token;
  }
  res.clearCookie(authCookieName);
  res.status(204).end();
});


// Middleware to verify that the user is authorized to call an endpoint
const verifyAuth = async (req, res, next) => {
  const userInfo= await findUser('token', req.cookies[authCookieName]);
  if (userInfo) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
};

//user: username, password, token, petState, score
apiRouter.get('/data/user', verifyAuth, async (req, res) => {
  const userInfo= await findUser('token', req.cookies[authCookieName]);
  res.send({ username: userInfo.username, petState: userInfo.petState, score: userInfo.score });
});

apiRouter.get('/data/userList', async (req, res) => {
  let leaderlist = [];
  for (const u of users) {
    leaderlist.push({ username: u.username, petState: u.petState, score: u.score });
  }
  leaderlist.sort((a, b) => b.score - a.score);
  
  res.send(leaderlist);
});

async function createUser(username, password) {
  const passwordHash = await bcrypt.hash(password, 10);

  const userInfo= {
    username: username,
    password: passwordHash,
    token: uuid.v4(),
    petState: {sprite: "../pet_sprites/base_cat.png", icon: "../pet_sprites/base_icon.png", petName: "Brian"},
    score: 0,
  };
  users.push(userInfo);

  return userInfo;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    maxAge: 1000 * 60 * 60 * 24 * 365,
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

//test
// var testData = {test:'testing'};
// apiRouter.get('/test',(_req,res) => {
//   console.log('in test')
//   res.send(testData);
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  });