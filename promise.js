//Promise


//Promise digunakan ketika ingin request ke API

//states(fullfilled/rejected/pending)
//callback (resolve/reject/finally)
//aksi (then/catch)

// promise1

// let hasil = true;
// const promise1 = new Promise((resolve,reject)=>{ //Callback Function
//     if (hasil){
//         resolve('Promise dijalankan')        //menggunakan callback resolve
//     }else{
//         reject('Promise tidak dijalankan') // Menggunakan callback reject
//     }
// });

// promise1
// .then(Response => console.log('OK ' + Response))// resolve
// .catch(Response=>console.log('NO ' + Response)) // reject


//promise2

let hasil = true;
const promise2 = new Promise((resolve,reject)=>{
    if(hasil){
        setTimeout(() => {
            resolve('Promise dijalankan setelah beberapa waktu')
            // console.log('Berhasil')
        }, 2000);
    }else{
        setTimeout(() => {
            reject('Promise tidak dijalakan setelah beberapa waktu')
            // console.log('gagal')
        }, 2000);
    }
});


//Asycn test

console.log('Mulai')
promise2
.then(Response=>{
    console.log('OK ' + Response)//Response merupakan callback dari function resolve
})
.catch(Response=>{
    console.log('NOT OK ' + Response)//Response merupakan callback dari function reject
})
.finally(()=>{
    console.log('Selesai dijalankan')
})
console.log('Finish')
