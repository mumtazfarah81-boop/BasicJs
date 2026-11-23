// const barang = [
// {
// kode: "kb-001",
// nama: "keyboard mechanical",
// harga: 45000
// },
// {
// kode: "ms-002",
// nama:"mouse gaming",
// harga: 250000

// },
// {
// kode:"hs-03",
// nama:"headset",
// harga:350000

// }

// ];


// const produk = barang[1];
// const jumlah = 7;
// const hargaAwal = produk.harga * jumlah;

// let diskon;

// if (jumlah >= 5) {
//   diskon = hargaAwal * 0.10;
// } else {
//   diskon = 0;
// }

// const totalBayar = hargaAwal - diskon;

// console.log(`Produk: ${produk.nama}
// Jumlah: ${jumlah}
// Harga awal: Rp${hargaAwal}
// Diskon: Rp${diskon}
// Total bayar: Rp${totalBayar}`);





const daftarSiswa = [
{
nama: "Andi",
kelas: "XI SIJA",
nilai: 85,
kehadiran: 90
},
{
nama: "Budi",
kelas: "XI SIAJ",
 nilai: 65,
kehadiran: 90
},
{
nama: "Citra",
kelas: "XI SIJA",
nilai: 92,
 kehadiran: 95
 },
{
nama: "Badutmu",
kelas: "XI SIJA",
nilai: 100,
kehadiran: 100
}
];

for (let i = 0; i < daftarSiswa.length; i++) {
if (daftarSiswa[i].nilai >= 75 && daftarSiswa[i].kehadiran >= 80) {
console.log(daftarSiswa[i]);
}
}