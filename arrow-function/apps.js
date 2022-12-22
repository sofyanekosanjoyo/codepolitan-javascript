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

//clearInterval(interval);
