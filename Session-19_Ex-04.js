let number = +prompt("Nhap 1 so")
document.write(`${number % 3 == 0 && number % 5 == 0 ?`${number} chia het cho ca 3 va 5` : `${number} khong chia het cho 3 va 5`}`)