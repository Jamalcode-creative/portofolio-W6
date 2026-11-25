//Latihan Java script
 //Kalkulator Nilai


const nama = "Bima";
const kkm = 75;
let tugas = 80;
let uts = 85;
let uas = 90;


let rataRata = (tugas + uts + uas) / 3;
let lulusKKM = rataRata >= kkm;

console.log(`Rata-rata ${nama}: ${rataRata}`);
console.log(`Lulus KKM: ${lulusKKM}`);

let predikatNilai;

if (rataRata >= 90) {
  predikatNilai = "A";
} else if (rataRata >= 80) {
  predikatNilai = "B";
} else if (rataRata >= 75) {
  predikatNilai = "C";
} else {
  predikatNilai = "D";
}

console.log(`Predikat: ${predikatNilai}`);

function hitungRataRata(tugas, uts, uas) {
  return (tugas + uts + uas) / 3;
}

function predikat(nilai) {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 75) return "C";
  return "D";
}






   





 