let num1 = +prompt("Nhap so thu 1")
let num2 = +prompt("Nhap so thu 2")
let num3 = +prompt("Nhap so thu 3")
let max = (num1 > num2) && (num1 > num3) ? num1 : (num2 > num3) ? num2 : num3
document.write(`So lon nhat trong 3 so la ${max}`)