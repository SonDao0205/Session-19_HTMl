let month = +prompt("Nhap thang")
if (month < 1 || month > 12) {
    document.write(`Thang khong hop le!`)
}
else{
    if (month <= 3) {
        document.write(`Mua xuan`)
    }
    else if (month <= 6) {
        document.write(`Mua ha`)
    }
    else if (month <= 9) {
        document.write(`Mua thu`)   
    }
    else{
        document.write(`Mua dong`)
    }
}