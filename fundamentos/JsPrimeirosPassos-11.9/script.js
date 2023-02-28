let sBruto = 10000;
let sInss;
let sIr;
let sLiquido;

if (sBruto <= 1556.94) {
    sInss = sBruto - ((sBruto * 8)/100)
}
else if (sBruto >= 1556.95 && sBruto <= 2594.92) {
    sInss = sBruto - ((sBruto * 9)/100)
}
else if (sBruto >= 2594.93 && sBruto <= 5189.82) {
    sInss = sBruto - ((sBruto * 11)/100)
}
else {
    sInss = sBruto - 570.88
}

if (sInss <= 1903.98) {
    sIr = sInss
}
else if (sInss >= 1903.99 && sInss <=2826.65) {
    sIr = sInss - (((sInss * 7.5)/100) - 142.80)
}
else if (sInss >= 2826.66 && sInss <=3751.05) {
    sIr = sInss - (((sInss * 15)/100) - 354.80)
}
else if (sInss >= 3751.06 && sInss <=4664.68) {
    sIr = sInss - (((sInss * 22.5)/100) - 636.13)
}
else {
    sIr = sInss - (((sInss * 27.5)/100) - 869.36)  
}

sLiquido = sIr

console.log(sLiquido);