const mang = [5, 8, 12, 6, 10, 15];

const giaTri = prompt("Nhập giá trị cần tìm kiếm trong mảng:");

let viTriTimThay = -1;

for (let i = 0; i < mang.length; i++) {
  if (mang[i] === parseInt(giaTri)) {
    viTriTimThay = i;
  }
}

if (viTriTimThay !== -1) {
  console.log(`Phần tử ${giaTri} được tìm thấy tại vị trí ${viTriTimThay} trong mảng.`);
} else {
  console.log("Phần tử không tồn tại trong mảng.");
}
