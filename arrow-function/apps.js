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
