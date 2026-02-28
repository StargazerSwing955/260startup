import { costumes } from "../service";


//mostly copied from Simon

const GameEvent = {
//   System: 'system',
//   End: 'gameEnd',
//   Start: 'gameStart',
    Score: 'score',
    Costume: 'costume',
};

class EventMessage {
  constructor(from, type, value) {
    this.from = from;
    this.type = type;
    this.value = value;
  }
};

class GameEventNotifier {
  events = [];
  handlers = [];

  constructor() {
    // Simulate chat messages that will eventually come over WebSocket
    setInterval(() => {
      const cosName = costumes[Math.floor(Math.random() * costumes.length)].name;
      const userName = 'Eich';
      this.broadcastEvent(userName, GameEvent.Costume, { name: userName, costume: cosName});
    }, 5000);
  }

  broadcastEvent(from, type, value) {
    const event = new EventMessage(from, type, value);
    this.receiveEvent(event);
  }

  addHandler(handler) {
    this.handlers.push(handler);
  }

  removeHandler(handler) {
    this.handlers.filter((h) => h !== handler);
  }

  receiveEvent(event) {
    this.events.push(event);

    this.handlers.forEach((handler) => {
      handler(event);
    });
  }
}

const GameNotifier = new GameEventNotifier();
export { GameEvent, GameNotifier };