const nama = "Andi";
console.log(nama.toUpperCase());
console.log(nama.toLowerCase());

const username = "Andi";
const usernameBaru = username.toLowerCase();
console.log(usernameBaru);

const email = "andi@gmail.com";
console.log(email.includes("@"));

const kode = "PC-001";
console.log(kode.startsWith("PC"));

const nama2 = ".Andi.";
console.log(nama2.trim());

const file = "laporan.docx";
if (file.endsWith(".jpg")) {
    console.log("File gambar");
} else if (file.endsWith(".pdf")){
    console.log("File PDF");
} else if (file.endsWith(".docx")){
    console.log("File Word");
}else{
    console.log("File tidak didefinisikan");
}

const namae = "Andi";
// console.log(namae.indexOf("d"), namae.indexOf("i"));

if(namae.indexOf("z") !== -1) {
    console.log("Nama di Temukan")
}else {
    console.log("Tidak di Temukan")
}




const numby = 2;
if(numby %2 === 0){
    console.log("Angka genap")
}else {
    console.log("Angka ganjil")
}

const kalimat = "Saya belajar Java";
const hasil = kalimat.replace("Java", "JavaScript").replace("Saya", "Aku");
console.log(hasil);
const warna = "Merah - kuning - hijau"
const hasil3 = warna.split(" - ")
console.log(hasil3)

const namaKelompok = ["Andi", "Budi", "Citra"];
const joinKelompok = namaKelompok.join(" - ");
console.log(joinKelompok);


const kasus1 = ("Aku suka renang");
const kaskus = kasus1.replace ("Aku", "saya");
const ks = kaskus.replace ("renang" , "berenang");
const splitceunah = ks.split (" ");
console.log(splitceunah);


const emailAndi = " ANDI@GMAIL.COM ";
const emailAndiBaru = emailAndi.trim().toLowerCase();
console.log(emailAndiBaru)








const siswa = {
    nama: " aNdI ",
    kelas: "xi sija",
    email: " ANDI@GMAIL.COM "
};

const siswaICT = [
 { nama: "Andi", email: "andi@gmail.com" },
 { nama: "Budi", email: "budi@yahoo.com" },
 { nama: "Citra", email: "citra@gmail.com" }
];