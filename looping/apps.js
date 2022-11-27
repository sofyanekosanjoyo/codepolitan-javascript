for (let i = 1; i <= 20; i += 2) {
  console.log("i ke-" + i);
}

for (let x = 20; x >= 1; x -= 2) {
  console.log("x = " + x);
}

for (let a = 10; a <= 1000000; a *= 10) {
  console.log("a = " + a);
}

//
const binatang = ["kucing", "rusa", "kelinci", "koala"];

for (let i = 0; i < binatang.length; i++) {
  console.log(i + 1, binatang[i]);
}

// Nested Loop
const pilihan = "abcde";
for (let i = 1; i <= 10; i++) {
  console.log(`${i}. Soal nomor ${i}`);
  for (let j = 0; j < pilihan.length; j++) {
    console.log(`${pilihan[j]}. Pilihan jawaban`);
  }
}
