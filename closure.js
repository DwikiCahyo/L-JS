//Closure merpakan kombinasi antara function dan lexical scope dalam function tersebut

//Bentuk 1
function hello(){
    let nama = 'Darman'; // variable lokal
    function lihat(){
        console.log(nama);// untuk menjalankan function lihat membutuhkan variabel maka akan menggambil variabel dari parent function maka akan disebut closure
    }
 lihat();
}
hello();

//Bentuk 2 
function hello(){
    let nama = 'Darman'; // variable lokal
    let umur = 12 // variable lokal
    function lihat(){
        console.log(nama);// untuk menjalankan function lihat membutuhkan variabel maka akan menggambil variabel dari parent function maka akan disebut closure
        console.log(umur);// untuk menjalankan function lihat membutuhkan variabel maka akan menggambil variabel dari parent function maka akan disebut closure
    }
 return lihat;//karena return mengembalikan nilai maka butuh variabel tambahan untuk memanggil
}
let lihatHello = hello();
lihatHello()

//Bentuk 3 Menggunakan anonymus function
function hello(){
    let nama = 'Darman'; // variable lokal
    let umur = 12 // variable lokal
    return function (){ // menggunakan anonymus function
        console.log(nama);// untuk menjalankan function lihat membutuhkan variabel maka akan menggambil variabel dari parent function maka akan disebut closure
        console.log(umur);// untuk menjalankan function lihat membutuhkan variabel maka akan menggambil variabel dari parent function maka akan disebut closure
    }
}
 
let lihatHello = hello();
lihatHello();