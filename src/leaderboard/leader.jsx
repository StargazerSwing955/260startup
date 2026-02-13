import React from 'react';

export function Leaderboard() {
  return (
     <main>
        
        {/* <!-- table layout: rank | pet icon | player-name | score --> */}
        <table className="Leaderboard">
            <caption>Pet Score Leaderboard</caption>
            <thead>
            <tr>
                <th>Rank</th>
                <th>Pet</th>
                <th>Player</th>
                <th>Score</th>
            </tr>
            </thead>

            <tbody>
                <tr>
                    <td>1</td>
                    <td><img className="pet-icon" src="../public/sprites/pet_icon_base.png" alt="pet-icon"/></td>
                    <td>Hailey</td>
                    <td>9999</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><img className="pet-icon" src="../public/sprites/pet_icon_base.png" alt="pet-icon"/></td>
                    <td>Brad</td>
                    <td>9950</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td><img className="pet-icon" src="../public/sprites/pet_icon_base.png" alt="pet-icon"/></td>
                    <td>Friend</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td><img className="pet-icon" src="../public/sprites/pet_icon_base.png" alt="pet-icon"/></td>
                    <td>You</td>
                    <td>0000</td>
                </tr>

            </tbody>

        </table>

    
    </main>

  );
}