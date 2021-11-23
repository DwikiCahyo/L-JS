const fs = require('fs');
const { resolve } = require('path');


const baca =(err,suc)=>{
    if(err){
        console.log('Gagal membaca berkas');
        return
    }
        console.log(suc);
    
 
};

fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', baca);


// //Jawaban 2
// const data = fs.readFileSync(resolve(__dirname, 'notes.txt'), 'UTF-8');
// console.log(data);