const fs = require('fs');
const { resolve } = require('path');

const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data)
}

const path = resolve(__dirname, 'notes.txt');

fs.readFile(path, 'utf-8', fileReadCallback);

// const data = fs.readFileSync('todo.txt', 'utf-8');

// console.log(data)