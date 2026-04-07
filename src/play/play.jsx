import React from 'react';
import { NavLink } from 'react-router-dom';
import { changeCostume, costumeName, updateScore, randomScore } from '../service';
import { PlayerEvents } from './notifhandler';
import { GameEvent, GameNotifier } from './notifications';


export function Play({user, petState, setPetState, score, setScore}) {
  
  //play functions calling to service
  const nextCostume =() => {
    let state =changeCostume(score, petState.sprite, petState.icon, petState.petName);
    setPetState(state);
    costumeEvent(user.username, costumeName(state.sprite));
  }

  async function costumeEvent(username, costumeName){
      GameNotifier.broadcastEvent(username, GameEvent.Costume, {msg: `switched costume to ${costumeName}`, costume: costumeName});
    }

  

  const playMode = () => {
    setScore(updateScore(score))
  } 

  const petPet = () => {
    setScore(randomScore(score))
    if (document.querySelector(".pet-box").classList.contains("isPetted")) {
        document.querySelector(".pet-box").classList.remove("isPetted");
    }else{
    document.querySelector(".pet-box").classList.add("isPetted");
  }}

  React.useEffect(() => {
    setInterval(() => {
    const leaderItem = {"icon": petState.icon, "username": user?.username, "score": score}
    localStorage.setItem('leaderboard', JSON.stringify([leaderItem]));
    }, 200)
  },[])

  

  return (
   <main>

        <div className="play-page-content">
         
            <div className="notification-list"><PlayerEvents /></div> 
        

        <p>Welcome back, {user?.username || "Guest"}!</p>

        <div className="play-content">

        <section className="pet-room">

            <h2 className="pet-room-name"><span className="Pet-Name" >{petState.petName}</span>&apos;s room!</h2> 
            {/* <!-- likely auto gen a name at first --> */}
            <p className="score-topleft">Score: <span className="score">{score}</span></p>

            {/* <!-- pet itself --> */}
              <div className="pet-box" onClick={petPet}> {/* <!--box for holding pet's hostage /j (for styling sprite relative to container) --> */}
            <img className="pet-sprite" src={petState.sprite} alt="Pet base sprite"/>
            </div>

            {/* <!-- might put this outside the room itself --> */}
            <div className="room-buttons">

                {/* <!--start minigame where mouse is a laser pointer --> */}
                <button className="room-but btn" onClick={playMode}>Play</button>

                {/* <!-- open costume closet --> */}
                <button className="room-but btn" onClick={nextCostume}>Costumes</button> 
            </div>

        </section>

        {/* <!-- under room content --> */}
        <div className="Under-room-content">
        <p> <img className="pet-icon float" src={petState.icon} alt="Pet head icon"/> {/* <!--icon should float left-->*/}You have <span className="score">{score}</span> points with <span className="Pet-Name">{petState.petName}</span></p> 
        <p>Check where you rank on the <NavLink to='/leaderboard'>leaderboard</NavLink>!</p>
        </div>
    
        </div> {/* <!-- end of play-content --> */}

        </div>{/* <!-- end of play-page-content --> */}

    </main>
  );
}