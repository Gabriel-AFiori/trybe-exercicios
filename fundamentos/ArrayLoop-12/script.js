let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index]
}

console.log(sum);

let arithmeticAverage = sum / numbers.length

console.log(arithmeticAverage);

if ( arithmeticAverage > 20) {
    console.log('Valor maior que 20');
}
else if (arithmeticAverage <= 20) {
    console.log('Valor menor ou igual a 20');
}
else {
    console.log('Valor incorreto');
}

let highNumber = [];
for (let index = 0; index < numbers.length; index += 1) {
    if (highNumber < numbers[index]) {
        highNumber = numbers[index]
    }
}

console.log(highNumber);

let oddNumber = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 == 1) {
        oddNumber.push(numbers[index])
    }
}

console.log(oddNumber);