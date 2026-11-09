const siswa = {
    nama: "Reihan", 
    umur: 17, 
    kelas: 7,
    hobby: "Catur"
};
// delete siswa.hobby;
// console.log(siswa);


// const nama = siswa.nama;
// const umur = siswa.umur;
// const kelas = siswa.kelas;

const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa, jurusan = "Belum ditentukan"} = siswa;

console.log("Nama:", namaSiswa);
console.log("Umur:", umurSiswa);
console.log("Kelas:", kelasSiswa);
console.log("Jurusan:", jurusan);


const warna = ["Merah", "Hijau", "Kuning"];

const [warna1, warna2, warna3] = warna;
console.log(warna1);



const laptop = ["asus", "lenovo", "acer", "hp","dell"];
const [merk1,merk2,merk3,merk4,merk5] = laptop;
console.log(merk3)

const siswaBaru = [
    { nama: "Andi", nilai: 80, umur: 16, kelas: 8},
    { nama: "Budi", nilai: 65, umur: 15, kelas: 8},
    { nama: "Citra", nilai: 90, umur: 16, kelas: 7 },
    { nama: "Dina", nilai: 70, umur: 17, kelas: 9 },
    { nama: "Eko", nilai: 85, umur: 18, kelas: 10}
];

siswaBaru.forEach(({nama, nilai, umur, kelas }) => {
    console.log("nama",nama," nilai",nilai,"umur", umur,"kelas", kelas)
});

const namaSaja = siswaBaru.map((namaDoang) => namaDoang.nama);
console.log(namaSaja);
const nilaiSaja = siswaBaru.map((nilaiDoang) => nilaiDoang.nilai);
console.log(nilaiSaja);

const daftarNama = siswaBaru.map(({ nama, nilai }) => {
    return { nama, nilai };
});
console.log(daftarNama);

const daftarHarga = [
    { nama: "Asus", harga: 14000000, kondisi: "baru" },
    { nama: "Lenovo", harga: 16000000, kondisi: "bekas" },
    { nama: "MSI", harga: 22000000, kondisi: "baru" },
];

const merkHarga = daftarHarga.map(({ nama, harga }) => {
    return { nama, harga };
});
console.log(merkHarga);