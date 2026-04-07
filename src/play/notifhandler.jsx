import React from 'react';

import { GameEvent, GameNotifier } from './notifications';

export function PlayerEvents(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, []);

  function handleGameEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];

    for (const [i, event] of events.entries()) {

      let message = '';
      if (event.type === GameEvent.Login){
        message = ` has logged in`;
      }
      else if (event.type === GameEvent.Costume) {
        message = ` is using costume ${event.value.costume}`;
      }
      else{
        continue;
      }
      
      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players'>
      <span className='player-name'>{userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
