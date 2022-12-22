let fruits = ["Pisang", "Jeruk", "Apel", "Mangga"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Buah ${fruits[i]}`);
// }

for (let fruit of fruits) {
  console.log(`Buah ${fruit}`);
}

const daftarPegawai = [
  ["Sofyan", "Diqa", "Jimmy", "Haviz", "Irwanto"],
  ["Hambali", "Fifi", "Jo", "Tika", "Adrian"],
  ["Nisa", "Candra", "Agung", "Rizjal"],
];

for (let baris of daftarPegawai) {
  for (let pegawai of baris) {
    console.log(pegawai);
  }
}

// Object
const nilaiSiswa = {
  Sofyan: 90,
  Diqa: 75,
  Jimmy: 78,
  Haviz: 85,
  Irwanto: 70,
  Hambali: 76,
  Fifi: 82,
  Tika: 86,
  Adrian: 74,
  Nisa: 88,
  Candra: 77,
  Agung: 82,
  Rizjal: 89,
};

// for (let siswa in nilaiSiswa) {
//   console.log(`${siswa} skor ${nilaiSiswa[siswa]}`);
// }

let total = 0;
let daftarNilai = Object.values(nilaiSiswa);

for (let nilai of daftarNilai) {
  total += nilai;
}

console.log(`Nilai Rata-rata = ${total / daftarNilai.length}`);

// Forech Method

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];

angka.forEach(function (elemen) {
  if (elemen % 2 === 0) {
    console.log(elemen);
  }
});

const animes = [
  { title: "Attack on Titan", rating: 90 },
  { title: "One Piece", rating: 89 },
  { title: "Bleach", rating: 88 },
  { title: "Hunter x Hunter", rating: 87 },
  { title: "Naruto", rating: 86 },
];

animes.forEach(function (anime) {
  console.log(`${anime.title} - ${anime.rating}/100`);
});

// Map
const angkaKuadrat = angka.map(function (num) {
  return num * num;
});

const animeList = animes.map(function (anime) {
  return anime.title.toUpperCase();
});
