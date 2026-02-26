import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Leaderboard } from './leaderboard/leader';
import { About } from './about/about';

export default function App() {
    const [user, setUser] = React.useState(null);
    const [petState, setPetState] = React.useState({"petName": "Brian"/*Pet-Name*/, "sprite": "base", "icon": "base"});
    const [score, setScore] = React.useState(0);

  return ( 
    <BrowserRouter>
    <div className='app'>
    <header>
        <div className="header-content">
            <h1>PetPet</h1>
            <nav >
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink to='/'>Login</NavLink>
                    </li>
                    {user && <>
                    <li className="nav-item">
                        <NavLink to='play'>Play</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='leaderboard'>Leaderboard</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to='about'>About</NavLink>
                    </li>
                    </>}
                </ul>
                
            </nav>
        </div>
    </header>

    <Routes>
     <Route path='/' element={<Login setUser={setUser} />} exact />
     <Route path='/play' element={<Play user={user} petState={petState} score={score} setScore={setScore} />} />
     <Route path='/leaderboard' element={<Leaderboard user={user} petState={petState} score={score} setScore={setScore} />} />
     <Route path='/about' element={<About />} />
     <Route path='*' element={<NotFound />} />
    </Routes>

    {/* <main>
       App components go here
    </main> */}

    <footer>
       
        <div className="footer-content">
        <p className="footerp">PetPet has a <a href="https://github.com/StargazerSwing955/260startup?tab=readme-ov-file">GitHub Repository</a></p>
        <p className="footerp">Sarah Kennedy</p>
        </div>
       
    </footer>
    </div>
    </BrowserRouter>
  );

}

function NotFound(){
    return <main>404 unknown address</main>
}

// Things I need to set up in JSX, but don't know where to put
/*

Quote randomizer (to be done with the about page)
pet_state - including name (change when selecting span in room label) and current costume
Costume array - array of arrays containing [sprite, icon] that can then be iterated on to determine what costume should be displayed 
play functions
player login - and tying it to pet_state
Score and score counter - figure out how to do scoring with the single thread
appending scores to the leaderboard

*/