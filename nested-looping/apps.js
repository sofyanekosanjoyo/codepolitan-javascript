const daftarPegawai = [
  ["Sofyan", "Diqa", "Jimmy", "Haviz", "Irwanto"],
  ["Hambali", "Fifi", "Jo", "Tika", "Adrian"],
  ["Nisa", "Candra", "Agung", "Rizjal"],
];

// for (let i = 0; i <= daftarPegawai.length; i++) {
//   console.log(i);
// }

for (let i = 0; i < daftarPegawai.length; i++) {
  const row = daftarPegawai[i];

  console.log(`Set Row #${i + 1}`);

  for (let j = 0; j < row.length; j++) {
    console.log(i, j, row[j]);
  }
}

for (let baris of daftarPegawai) {
  for (let pegawai of baris) {
    console.log(pegawai);
  }
}

// While looping
let nomor = 0;

while (nomor < 10) {
  console.log(nomor);
  nomor++;
}

for (let nomor = 0; nomor < 10; nomor++) {
  console.log(nomor);
}

const PASSWORD = "123";

let user = prompt("Masukkan password!");

while (user !== PASSWORD) {
  prompt("Password salah!. Masukkan ulang password!");
}
alert("Selamat! Password anda benar");
