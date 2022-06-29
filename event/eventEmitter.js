const { EventEmitter } = require('events');

const myEventEmitter = new EventEmitter();

// fungsi akan dijalankan ketika event coffe-order dijalankan
const makeCoffee = (name) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = (price) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

// mendaftarkan fungsi makeCoffe sebagai listener event coffee-order
// myEventEmitter.on('coffee-order', makeCoffee);
// myEventEmitter.on('coffee-order', makeBill);

// menggunakan handler
const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price)
}

// Listener
myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

// memicu event 'coffe-order' terjadi
myEventEmitter.emit('coffee-order', { name: 'Tubruk', price: 120000 });

