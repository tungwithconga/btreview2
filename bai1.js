const mang = [3, 'a', 7, 'b', 10, true, 5];
function laSoNguyen(n) {
  return Number.isInteger(n);
}

let coSoNguyen = false;

console.log("Các số nguyên trong mảng là:");
for (let i = 0; i < mang.length; i++) {
  if (laSoNguyen(mang[i])) {
    console.log(mang[i]);
    coSoNguyen = true;
  }
}

if (!coSoNguyen) {
  console.log("Trong mảng không tồn tại số nguyên");
}
