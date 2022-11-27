// console.log("Sebelum pembanding");

// if (1 + 1 == 4) {
//   console.log("Didalam pembanding");
// }

// console.log("Setelah pembanding");

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//   console.log("Angka lebih besar dari 0.5");
// } else {
//   console.log("Angka lebih kecil dari 0.5");
// }

// const iniHari = prompt("Isikan hari!").toLowerCase();

// if (iniHari === "senin") {
//   console.log("Semangat bekerja kawan");
// } else if (iniHari === "sabtu") {
//   console.log("Semoga jangan cepat berlalu");
// } else {
//   console.log("Yah biasa saja");
// }

// const nilai = "70";

// if (nilai < 50) {
//   console.log("E");
// } else if (nilai < 60) {
//   console.log("D");
// }else if (nilai < 70) {
//   console.log("C");
// }else if (nilai < 80) {
//   console.log("B");
// }else if (nilai < 90) {
//   console.log("E");
// }else if (nilai < 100) {
//   console.log("A");
// }

// const password = prompt("Buat password");

// // Password harus sepanjang 6 karakter
// if (password.length >= 6) {
//   // Cek karakter spasi
//   if (password.indexOf(" ") === -1) {
//     console.log("Password valid");
//   } else {
//     console.log("Password tidak boleh ada spasi");
//   }
// } else {
//   console.log("Password minimal 6 karakter");
// }

// let age = 19;
// let gender = "Laki-laki";

// if ((gender === "Laki-laki") & (age === 19)) {
//   console.log("Legal");
// }

// const password = prompt("Buat password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Password Valid");
// } else {
//   console.log("Password tidak memenuhi syarat");
// }

// let role = prompt("Masukan role akun");

// if (role === "admin" || role === "spv") {
//   console.log("Akses diterima");
// } else {
//   console.log("Akses ditolak");
// }

// let role = prompt("Masukan role akun");

// if (role !== "admin") {
//   console.log("Akses ditolak");
// } else {
//   console.log("Akses diterima");
// }

// let hari = prompt("Masukan hari");
// switch (hari) {
//   case "senin":
//     console.log("Hari kerja");
//     break;
//   case "minggu":
//     console.log("Hari libur");
//     break;
//   default:
//     console.log("Bukan nama hari");
// }

// // Array kosong
// let peserta = [];

// // Kumpulan string
// let warna = ["merah", "jingga", "kuning", "hijau", "biru", "nila", "ungu"];

// // kumpulan angka
// let bilanganPrima = [2, 3, 5, 7, 11];

// // kumpulan sesuatu
// let sesuatu = [true, 11, "Kucing", null];

// // pemberian nilai baru
// // warna[3] = prompt("Masukkan warna");
// warna[4] = 100;
// warna[10] = "pink";
// console.log(warna);
// console.log(warna[9]);

// let barbel = [];

// barbel.push(3);
// barbel.push(6);
// console.log(barbel);

// barbel.push(9, 12, 15.5, 18.88);
// console.log(barbel);

// barbel.unshift("Aa", "Bb", "Cc");
// console.log(barbel);

// barbel.pop();
// console.log(barbel);

// barbel.pop();
// console.log(barbel);

// barbel.pop();
// console.log(barbel);

// barbel.shift();
// console.log(barbel);

// barbel.shift();
// console.log(barbel);

// // Array bercabang
// const tikTakToe = [
//   [null, null, "o"],
//   ["x", "o", null],
//   ["o", null, "x"],
// ];

// console.log(tikTakToe);
// console.log(tikTakToe[0][2]);
// console.log(tikTakToe[2][2]);
// console.log(tikTakToe[1][2]);

// Object Javascript
console.log(typeof []);

const biodata = {
  nama: "Sofyan",
  jenisKelamin: "Laki-laki",
  tinggiBadan: 165,
  beratBadan: 70,
  statusHidup: true,
  keluarga: ["Sunamto", "Suratmi", "Sofyan", "Wahyu"],
  alamat: {
    kelurahan: "Kembangan Utara",
    kecamatan: "Kembangan",
    kota: "Jakarta Barat",
  },
};

console.log(biodata);
console.log(biodata["nama"]);
console.log(biodata["tinggiBadan"]);
console.log(biodata.beratBadan);

console.log(biodata["statusHidup"]);
console.log(biodata["status" + "Hidup"]);

console.log(biodata["keluarga"]);
console.log(biodata.alamat.kota);

biodata["nama"] = "Joy";
console.log(biodata["nama"]);
biodata.tinggiBadan = 170;
console.log(biodata.tinggiBadan);

let pendidikan = "pendidikan";
biodata.pendidikan = "S-1 Teknik Informatika";
console.log(biodata.pendidikan);

// Object bersarang
const keranjang = [
  {
    produk: "jeruk",
    harga: 5000,
    kuantitas: 5,
  },
  {
    produk: "pisang",
    harga: 6000,
    kuantitas: 2,
  },
  {
    produk: "anggur",
    harga: 10000,
    kuantitas: 3,
  },
];

console.log(keranjang[0]["produk"]);
console.log(keranjang[1].produk);
