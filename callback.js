// Callback Function


// synchronus callback

function hallo(nama,umur){
    alert(`Halo ${nama} , ${umur}`);
}

function tampilkanpesan(callback){ // memanggil parameter fungsi sebelumnya
    const nama = prompt('Masukan Nama : ')
    const umur = prompt('Masukan Umur')
   callback(nama ,umur)//deklarasi paramameter fungsi
}

// tampilkanpesan(hallo);//parameter fungsin dipanggil ( urutann  stack pertama)
tampilkanpesan((nama,umur) => {
    alert(`Halo ${nama} , ${umur}`);
}) //  contoh menggunakan arrow function



