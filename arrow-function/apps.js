// Function
function perpangkatan(x) {
  return x * x;
}

const hasil = perpangkatan(5);

console.log(hasil);

// Arrow Function
const pangkat = (x) => {
  return x * x;
};

console.log(pangkat(7));

const random = () => {
  return Math.floor(Math.random() * 100);
};

console.log(random());

// Return secara implisit dari arrow funtion
const add = (a, b) => a + b;

// Settimeout
console.log("Halo...");
setTimeout(() => {
  console.log("Masih disana gak???");
}, 3000);
console.log("Saya pergi ya...");

// Settimeout dan Setinterval
const interval = setInterval(() => {
  console.log(Math.random() * 1000);
}, 1000);

clearInterval(interval);

// Method Filter dalam Array
const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const angkaGanjil = angka.filter((n) => {
  return n % 2 === 1;
});

console.log(angkaGanjil);

const animes = [
  { title: "Attack on Titan", rating: 84, year: 2013 },
  { title: "One Piece", rating: 89, year: 1999 },
  { title: "Bleach", rating: 83, year: 2004 },
  { title: "Hunter x Hunter", rating: 87, year: 2011 },
  { title: "Naruto", rating: 86, year: 2002 },
];

const animeBagus = animes.filter((anime) => anime.rating >= 85);
console.log(animeBagus);

const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
console.log(animeCukupBagus);

const animeBaru = animes.filter((anime) => anime.year > 2010);
console.log(animeBaru);

const judulAnimeBagus = animes
  .filter((anime) => anime.rating >= 85)
  .map((anime) => anime.title);

console.log(judulAnimeBagus);
