import React from 'react';




export function Leaderboard({user, petState, score, setScore}) {

    const [leaderboard,setLeader] = React.useState([]);

    //need a function that appends pet icon, username, and score to leaderboard array


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