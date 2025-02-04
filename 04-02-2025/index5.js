const EventManagement = require('./EventManagement');

const eventManager = new EventManagement();

eventManager.on('start', () => {
    console.log("Listener: The event has started.");
});

eventManager.on('in-progress', () => {
    console.log("Listener: The event is in progress.");
});

eventManager.on('completed', () => {
    console.log("Listener: The event has been completed.");
});

eventManager.startEvent();
eventManager.inProgressEvent()
eventManager.completedEvent()


