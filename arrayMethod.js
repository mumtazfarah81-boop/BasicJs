const nilai = [80, 75, 90, 85, 70, 56, 78, 50, 25, 30, 40];
nilai.forEach((angka) => { 
    console.log(angka + 5);
});

nilai.forEach((angka) => {
if (angka >= 75) {
    console.log(angka + " - Lulus");
} else {
    console.log(angka + " - Remedial");
}
});

const baru = ["Harry", "Potter", "Malfoy", "Wizard", "David", "Lucy", "Maine", "Dorio", "Kiwi", "Rebecca"];
baru.forEach((nama) => {
    console.log(nama);
});

const siswa = [
    { nama:"Joko", alamat:"Solo", umur:12, kelas:7},
    { nama:"xia", alamat:"semarang", umur:27, kelas:13},
    { nama:"keyya", alamat:"papua", umur:28, kelas:4}
];

const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
const umurSaja = siswa.map((umurDoang) => umurDoang.umur);
console.log(namaSaja);
console.log(umurSaja);


const nilaiBaru = [80, 65, 90, 70, 85, 80, 60, 45, 35, 78];
const nilaiLulus = nilai.filter((angka) => {
    return angka >= 75;
});
console.log(nilaiLulus);

const arrayAngka = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const angkaGenapBaru = arrayAngka.filter((jumlah) => {
    return jumlah %2 === 0
});
console.log(angkaGenapBaru);

const angkaGanjil = arrayAngka.filter((jumlah) => {
    return jumlah % 2 !== 0;
});

console.log(angkaGanjil);


const warTicket = [
    {nama : "Konser", jumlah : 300, dipesan : 200},
    {nama : "Seminar", jumlah : 100, dipesan : 90},
    {nama : "Workshop", jumlah : 80, dipesan : 80}
];
const sisaTicket = warTicket.filter((ticket) =>
    ticket.jumlah - ticket.dipesan >= 30,
);
// console.log(sisaTicket)

const habis = warTicket.find((tiket) => 
    tiket.jumlah - tiket.dipesan === 0
);
// console.log(habis);

const masihBknKonser = warTicket.find((tiket) => 
    tiket.jumlah - tiket.dipesan !== 0 && tiket.nama !== "Konser"
);
console.log(masihBknKonser);

const produk = [
  { nama: "Mouse", harga: 100000 },
  { nama: "Keyboard", harga: 150000 },
  { nama: "Headset", harga: 200000 },
  { nama: "Flashdisk", harga: 50000 },
  { nama: "Webcam", harga: 250000 }
];

const hargaPromo = produk.map((item) => {
  return {
    nama: item.nama,
    hargaPromo: item.harga - (item.harga * 0.1) 
  };
});

console.log("=== Hasil Harga Promo ===");
console.log(hargaPromo);

console.log("\n=== Array Produk Asli ===");
console.log(produk);


const calonAnggota = [
  { nama: "Andi", nilai: 85, kehadiran: 90 },
  { nama: "Budi", nilai: 75, kehadiran: 95 },
  { nama: "Citra", nilai: 90, kehadiran: 85 },
  { nama: "Dina", nilai: 80, kehadiran: 70 },
  { nama: "Eko", nilai: 88, kehadiran: 100 },
  { nama: "Fajar", nilai: 70, kehadiran: 75 }
];

// 1 & 2. Menggunakan filter() dan menyimpannya dalam variabel anggotaLolos
const anggotaLolos = calonAnggota.filter((siswa) => {
  // Menggunakan operator && (AND) karena kedua syarat harus terpenuhi
  return siswa.nilai >= 80 && siswa.kehadiran >= 80;
});

// 3. Menampilkan nama siswa yang lolos dengan perulangan forEach 
anggotaLolos.forEach((siswa) => {
  console.log(siswa.nama);
});

console.log(""); // Memberikan jarak baris kosong (opsional, agar persis target output)

// 4. Menampilkan total jumlah menggunakan .length
console.log(`Jumlah anggota yang lolos: ${anggotaLolos.length}`);

