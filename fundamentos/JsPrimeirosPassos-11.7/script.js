let nota = 90;
let pNota = '';

if (nota >= 90 && nota < 100) {
    pNota = 'A'
}
else if (nota >= 80 && nota < 90) {
    pNota = 'B'
}
else if (nota >= 70 && nota < 80) {
    pNota = 'C'
}
else if (nota >= 60 && nota < 70) {
    pNota = 'D'
}
else if (nota >= 50 && nota < 60) {
    pNota = 'E'
}
else if (nota < 50 && nota >= 0) {
    pNota = 'F'
}
else {
    console.log('Mensagem de erro');
}
console.log(pNota);