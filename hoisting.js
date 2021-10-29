// Menentukan tingkat dalam penulisan variabel yang akan digunakan dalam baris berikutnya 


// console.log(hello());

//Contoh 1
let nama = 'Darman';
let jenisKelamin ='laki-laki';

function hello(){
    return `Halo saya ${nama} saya  ${jenisKelamin}`;
}

console.log(hello());

// Jadi inti untuk hoisting dan execution context adalah menentukan baris mana dulu yang akan dieksekusi sesuai dengan keaadan
// dari variabel global dan variable lokal yang kemudaian akan dijalanka execution stack 



// Study Case
function pertama(){
    var  nama = 'Darman';
    console.log(nama);
}
function kedua(){
    console.log(nama);
}

console .log(nama); // eksekusi pertama = undefined karena tidak ada variable yang menyatakan nama
var nama = 'Jini'; // deklarasi varibel nama
pertama();// hasil print nama Darman karena terdapata lokal variabel pada function
kedua('ipul');//hasil berdasarkan variabel global yang ditulis karena tidak aadanya lokal variable dan argument sehingga tidak terjadi hoisting(mengangkat/menaruh)
console.log(nama);//hasil dari variabel global 

//jalankan study case dengan melakukan command pada contoh 1

//Hasil:
// undefined
// Darman
// Jini
// Jini