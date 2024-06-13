class EventEmitter {

  register(event, listener) {}

  emit(event) {}
}

const a = new EventEmitter();
const b = new EventEmitter();

a.register('e1', () => console.log('a1'));
a.register('e2', () => console.log('a2'));

b.register('e1', () => console.log('b1'));
b.register('e1', () => console.log('b11'));

b.emit('e1'); // print b1 and b11
a.emit('e2'); // print a2