// let lemparDadu = Math.floor(Math.random() * 6) + 1;
// console.log(lemparDadu);

// const { func } = require("prop-types");

function lemparDadu() {
  console.log(Math.floor(Math.random() * 6) + 1);
}

lemparDadu();

function nyanyi() {
  console.log("Cek...");
  console.log("Do re mi fa sol la si do...");
}

nyanyi();

function selamatPagi(nama) {
  console.log(`Halo, ${nama}. Selamat pagi!`);
}

selamatPagi("Sofyan");

function jumlahkan(a = 0, b = 0) {
  const total = a + b;
  console.log(total);
  return total;
}

jumlahkan(1, 8);
jumlahkan();

function kalikan(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Bukan angka";
  } else {
    const total = a * b;
    console.log(total);
    return total;
  }
}

// kalikan();

let nama = "Sofyan";

function alias() {
  let nama = "Joy";
  nama = "Joy";
  // console.log(nama);
}

alias();
console.log(nama);

// Lexical Scope
function instansi() {
  const instansi = "Kementerian PUPR";

  function unitOrgansasi() {
    const unor = "Ditjen SDA";

    function unitKerja() {
      const uker = `Dit. Supan, ${unor}, ${instansi}`;
      console.log(uker);
    }

    unitKerja();
  }

  unitOrgansasi();
}

instansi();

// function kuadrat(nilai) {
//   return nilai * nilai;
// }

// let hasil = kuadrat(4);

const pangkatDua = function (nilai) {
  return nilai * nilai;
};

console.log(pangkatDua(10));
