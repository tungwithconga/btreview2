function findDivisibleNumbers(a, b) {
    let divisibleNumbers = [];
    for (let i = 1; i <= a; i++) {
        if (i % b === 0) {
            divisibleNumbers.push(i);
        }
    }
    for (let i = 1; i <= b; i++) {
        if (i % a === 0) {
            divisibleNumbers.push(i);
        }
    }

    return divisibleNumbers;
}
let a = parseInt(prompt("Nhập số nguyên dương a:"));
let b = parseInt(prompt("Nhập số nguyên dương b:"));
if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    console.log("Vui lòng nhập hai số nguyên dương.");
} else {
    let result = findDivisibleNumbers(a, b);
    console.log("Các số chia hết cho", b, "trong khoảng từ 1 đến", a, "hoặc các số chia hết cho", a, "trong khoảng từ 1 đến", b, "là:");
    console.log(result);
}
