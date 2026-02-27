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
    for (const [i, leaderboardEntry] of leaderboard.entries()) {
      scoreRows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{leaderboardEntry.petState.icon}</td>
          <td>{leaderboardEntry.user.username}</td>
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
             {console.log(scoreRows)}

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

    
    </main>

  );
}