let maks = parseInt(prompt("Masukkan nilai maksimal!"));

while (!maks) {
  maks = prompt("Masukkan nilai maksimal!");
}

const targetNilai = Math.floor(Math.random() * maks) + 1;
console.log(targetNilai);

let user = parseInt(prompt("Isi tebakan pertama kamu!"));
let attempts = 1;

while (parseInt(user) !== targetNilai) {
  attempts++;
  if (user > targetNilai) {
    user = prompt("Nilai terlalu tinggi! Tebak lagi");
  } else {
    user = prompt("Nilai terlalu rendah! Tebak lagi");
  }
}

alert(`Selamat! Tebakkan kamu benar!!! Setelah percobaan ${attempts} kali`);
