const EventEmitter = require('node:events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', (arg1, arg2) => {
      console.log('B', arg1, arg2);
    });

    // Store the original listener function in a variable
    const originalListener = listener;

    // Add another listener that calls the original listener
    myEmitter.on('event', (...args) => {
      // Call the original listener function with the same arguments and context
      originalListener.apply(myEmitter, args);
    });
  }
});

// Adding the original listener with arguments
myEmitter.on('event', (arg1, arg2) => {
  console.log('A', arg1, arg2);
});

// Emit the event with arguments
myEmitter.emit('event', '11', '22');
