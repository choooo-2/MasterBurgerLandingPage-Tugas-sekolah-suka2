function menu_makanan(){
    let tambah_angka = document.getElementById("tambah_menu");
    let angkaSekarang = parseInt(tambah_angka.innerText);
    tambah_angka.innerText = angkaSekarang + 1;
}