import React from 'react';




export function Leaderboard({user, petState, score, setScore}) {

    const [leaderboard,setLeader] = React.useState([]);
    //each row should be {index+1, icon, username, score}

    //need a function that appends rows to array and sorts by score

  // copied from simon
    React.useEffect(() => {
    const scoresText = localStorage.getItem('leaderboard');
    if (scoresText) {
      setLeader(JSON.parse(scoresText));
    }
  }, []);

  const scoreRows = [];
  if (leaderboard.length) {
    console.log(leaderboard);
    for (const [i, leaderboardEntry] of leaderboard.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i+1}</td>
          <td><img className="pet-icon" src={leaderboardEntry.icon} alt="Pet icon"/></td>
          <td>{leaderboardEntry.username}</td>
          <td>{leaderboardEntry.score}</td>
        </tr>
      );
    }
  } else {
    scoreRows.push(
      <tr key='0'>
        <td colSpan='4'>Be the first to score</td>
      </tr>
    );
  }

  //test, this works
  function testClick() {
    fetch('/api/test')
    .then((response) => response.json())
    .then((testing) => {
      console.log(testing);
    });
  }

  return (
     <main>
        
        {/* <!-- table layout: rank | pet icon | player-name | score --> */}
        <table className="Leaderboard">
            {/* <caption>Pet Score Leaderboard</caption> */}
            <thead>
            <tr>
                <th>Rank</th>
                <th>Pet</th>
                <th>Player</th>
                <th>Score</th>
            </tr>
            </thead>
             <tbody id='scores'>{scoreRows}</tbody>

            {/* filler */}
            {/* <tbody>
                <tr>
                    <td>1</td>
                    <td><img className="pet-icon" src={petState.icon} alt="pet-icon"/></td>
                    <td>Hailey</td>
                    <td>9999</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img className="pet-icon" src={petState.icon} alt="pet-icon"/></td>
                    <td>Brad</td>
                    <td>9950</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img className="pet-icon" src={petState.icon} alt="pet-icon"/></td>
                    <td>Friend</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img className="pet-icon" src={petState.icon} alt="pet-icon"/></td>
                    <td>You</td>
                    <td>{score}</td>
                </tr>

            </tbody> */}

        </table>
          
          {/* for testing */}
          <button onClick={testClick}>testing</button>
    
    </main>

  );
}