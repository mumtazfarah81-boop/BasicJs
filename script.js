script.js


const siswa1 = {
    nama: "Andi", 
    kelas: "X SIJA B", 
    umur: 16,
    alamat: {
        jalan: "Jl. Mawar 16",
        kota: "Badui"
    },
    nomorHP: 628887621384
};
const siswa2 = {
    nama: "Adli",
    kelas: "X SIJA A",
    umur: 16,
    alamat: "Jl. Lkr Delanggu, Klaten",
    nomorHPku: 6289630908129
}


const siswa = [
    { nama: "Andi", kelas: "X SIJA A", alamat: "Klaten", noTelepon: "6274756347", umur: 25},
    { nama: "Budi", kelas: "X SIJA A", alamat: "Jakarta", noTelepon: "6287265834", umur: 22 },
    { nama: "Citra", kelas: "X SIJA B", alamat: "Wonogiri", noTelepon: "6274756347", umur: 24 },
    { nama: "Dani", kelas: "X SIJA B", alamat: "Sragen",noTelepon: "62876583563", umur: 28 }
]

console.log("Namanya", siswa[0].nama, "Alamatnya", siswa[0].alamat);