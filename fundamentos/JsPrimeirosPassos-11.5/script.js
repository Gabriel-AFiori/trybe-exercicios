let ang1 = 30;
let ang2 = 80;
let ang3 = 70;

let allAngsPositive = ang1 && ang2 && ang3 > 0


if (allAngsPositive) {
    if (ang1 + ang2 + ang3 == 180) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
else {
    console.log('Mensagem de erro');
}