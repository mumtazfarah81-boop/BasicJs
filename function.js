function belajar() {
    console.log("Learning!");
    console.log("Javascript");
}

function salam(nama){
    console.log("Assalamu'alaikum, " + nama);
}

// salam("Adli");
// salam("Luthfi");
// belajar();


function tambah(a, b) {
    console.log(a * b);
}

// tambah(10, 5);
// tambah(20, 30);
// tambah(100, 200);


function hitungTotal(harga, jumlah) {
    console.log(`Harga Apel perbuah: ${harga}, Jumlah: ${jumlah}`);
    return harga * jumlah;
}

let total = hitungTotal(5000, 4);
let diskon = 2000;
let bayar = total - diskon;

console.log("Diskon: " + diskon);
console.log("Harga Bayar: " + bayar);

function luasLingkaran(phi, r){
    return phi * (r ** 2);
};
function kelilingLingkaran(phi, r){
    return 2 * phi * r;
}

// console.log("Luas Lingkarannya: " + luasLingkaran(3.14, 7));
// console.log("Keliling Lingkarannya: " + kelilingLingkaran(3.14, 7));

function volumeBalok(p, l, t){
    return p * l * t;
} //function declaration

const volumeBalok2 = function (p, l, t) {
    return p * l * t;
} //function expression

// console.log("Volume Baloknya: " + volumeBalok(17, 5, 10));

const tambah2 = (a, b) => a + b; //bentuk simple dari arrow function

console.log(tambah2(5, 2));


function tampilkanNama() {
    let nama = "Andi";   
}

// console.log(nama);
