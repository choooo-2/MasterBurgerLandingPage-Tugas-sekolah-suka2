function tambahKeranjang() {
    let span = document.getElementById("keranjang");

    // ambil angka sekarang
    let angka = parseInt(span.innerText);

    // tambahkan 1
    span.innerText = angka + 1;
}
