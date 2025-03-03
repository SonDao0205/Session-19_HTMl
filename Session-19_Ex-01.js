let month = +prompt("Nhap thang")

if (month > 12) {
    document.write(`Thang khong hop le!`)
}
else{
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        document.write(`Thang ${month} co 30 ngay!`)
    }
    else if (month == 2) {
        document.write(`Thang ${month} co 28 ngay hoac 29 ngay vao nam nhuan`)
    }
    else{
        document.write(`Thang ${month} co 31 ngay!`)
    }
}
