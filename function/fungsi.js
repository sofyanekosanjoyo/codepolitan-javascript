function duaKali(func) {
  func();
  func();
}

function lemparDadu() {
  const angkaDadu = Math.floor(Math.random() * 6) + 1;
  console.log(angkaDadu);
}

lemparDadu();
// duaKali();

// Nilai direturn harus ada variable penampung
function hasilnyaAdalahFunction() {
  const angkaRandom = Math.random();
  if (angkaRandom > 0.5) {
    return function () {
      console.log(`Selamat! ${angkaRandom} lebih besar dari 0.5`);
    };
  } else {
    return function () {
      console.log(`Maaf! ${angkaRandom} lebih kecil dari 0.5`);
    };
  }
}

const hasil = hasilnyaAdalahFunction();
hasil();

// Perbedaan fungsi biasa, object, dan method
//Fungsi biasa
function tambah(x, y) {
  console.log(x + y);
  return x + y;
}

// Object
const aritmatika = {
  //Method (Fungsi dengan objek)
  tambah: function (x, y) {
    console.log(x + y);
    return x + y;
  },
  kurang: function (x, y) {
    console.log(x - y);
    return x - y;
  },
  kali: function (x, y) {
    console.log(x * y);
    return x * y;
  },
  bagi: function (x, y) {
    console.log(x / y);
    return x / y;
  },
  pangkat: function (x) {
    console.log(x * x);
    return x * x;
  },
};

//Memanggil method (fungsi dalam objek)
aritmatika.kali(4, 9);

// THIS
const pegawai = {
  nama: "Sofyan Eko Sanjoyo",
  hobi: "Koding",
  kenalan: function () {
    return `Hai, saya ${this.nama}. Hobi saya ${this.hobi}`;
  },
};

pegawai.kenalan();

try {
  pegawai.kenalan();
} catch {
  console.log("Fungsi ini eror");
}

// pegawai.kenalan();
console.log("Setelah proses try and catch");

function teriak(pesan) {
  try {
    console.log(pesan.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log("Silahkan masukkan tipe data string pada argument teriak()");
  }
}
