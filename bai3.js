const mang = [5, 8, 7, 5, 12, 5, 6, 10, 5, 15];

const soCanTim = parseInt(prompt("Nhập vào số nguyên cần kiểm tra số lần xuất hiện trong mảng:"));

let soLanXuatHien = 0;

for (let i = 0; i < mang.length; i++) {
  if (mang[i] === soCanTim) {
    soLanXuatHien++;
  }
}

console.log(`Số ${soCanTim} xuất hiện ${soLanXuatHien} lần trong mảng.`);
