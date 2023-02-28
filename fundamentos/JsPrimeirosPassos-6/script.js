let nota = 78;
let message;

if (nota >= 80) {
    message = 'Parabéns, você faz parte do grupo de pessoas aprovadas!'
}
else if (nota < 80 && nota >= 60) {
    message = 'Você está na nossa lista de espera.'
}
else if (nota < 60) {
    message = 'Infelizmente, você reprovou.'
}
else {
    message = "Nota não encontrada.";
}

console.log(message);