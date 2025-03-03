let input = prompt("Nhap 1 ky tu:");

if (input.length === 1) {  
    if (input >= "a" && input <= "z" || input >= "A" && input <= "Z") {  
        document.write(`${input} la chu cai`);
    } else if (input >= "0" && input <= "9") {  
        document.write(`${input} la chu so`);
    } else {  
        document.write(`${input} khong phai chu cai`);
    }
} else {
    document.write(`${input} khong phai chu cai`);
}
