import React from 'react';
import { NavLink } from 'react-router-dom';

export function Play() {
  return (
   <main>

        <div className="play-page-content">
        <ul className="notification-list"> {/*<!-- class name lengthed to prevent confusion --> */}
            <li className="notification">Brian has unlocked the tuxedo pet!</li>
            <li className="notification">Friend has reached 5000 points!</li> 
            {/* <!-- Points will likely be given a silly name later --> */}
            
        </ul>

        <div className="play-content">

        <section className="pet-room">

            <h2 className="pet-room-name"><span className="Pet-Name">Pet-Name</span>&apos;s room!</h2> 
            {/* <!-- likely auto gen a name at first --> */}
            <p className="score-topleft">Score: <span className="score">0000</span></p>

            {/* <!-- pet itself --> */}
              <div className="pet-box"> {/* <!--box for holding pet's hostage /j (for styling sprite relative to container) --> */}
            <img className="pet-sprite" src="../sprites/pet_base_sprite.png" alt="Pet base sprite"/>
            </div>

            {/* <!-- might put this outside the room itself --> */}
            <div className="room-buttons">

                {/* <!--start minigame where mouse is a laser pointer --> */}
                <button className="room-but btn">Play</button>

                {/* <!-- open costume closet --> */}
                <button className="room-but btn">Costumes</button> 
            </div>

        </section>

        {/* <!-- under room content --> */}
        <div className="Under-room-content">
        <p> <img className="pet-icon float" src="../sprites/pet_icon_base.png" alt="Pet head icon"/> {/* <!--icon should float left-->*/}You have <span className="score">0000</span> points with <span className="Pet-Name">Pet-Name</span></p> 
        <p>Check where you rank on the <NavLink to='/leaderboard'>leaderboard</NavLink>!</p>
        </div>
    
        </div> {/* <!-- end of play-content --> */}

        </div>{/* <!-- end of play-page-content --> */}

    </main>
  );
}