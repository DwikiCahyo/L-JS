// Membuat iterasi dengan for of dan for in

const nama = ['darman','sulis','adam']


//menggunakna for biasa
for(let i = 0; i < nama.length;i++){
    console.log(nama[i])
}

//menggunakan foreach
nama.forEach( m => console.log(m));

// nama.forEach(m=>{  //  foreach menggunakan function
//     //isi function 
// })

//menggunakna for of
for(const m of nama){
    console.log(m)
}

//menggunakan for in (no iterable objek)
const contoh = {
    nama : 'fuad',
    umur : 32,
}

for ( c in contoh){
    console.log(contoh[c] ,` indeks adalah  ${c}`)// memanggil isi dari indek contoh[c] , memanggil index c
}

