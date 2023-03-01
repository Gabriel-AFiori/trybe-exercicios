let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sum += numbers[index]
}

console.log(sum);

let arithmeticAverage = sum / numbers.length

console.log(arithmeticAverage);

if (arithmeticAverage > 20) {
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
    else {
        console.log('Nenhum valor ímpar encontrado');
    }
}

console.log(oddNumber);

let lowerNumber = numbers[0];
for (let index = 0; index < numbers.length; index += 1) {
    if (lowerNumber > numbers[index]) {
        lowerNumber = numbers[index]
    }
}

console.log(lowerNumber);

let newNumbers = [];
for (let index = 1; index <= 25; index += 1) {
    newNumbers.push(index);
}

console.log(newNumbers);

for (index = 0; index < newNumbers.length; index += 1) {
    console.log(newNumbers[index] / 2);
}

let word = 'tryber';
let reverseWord = [];
for (let index = 0; index < word.length; index += 1) {
    reverseWord += word[word.length - 1 - index];
}
console.log(reverseWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = [];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (biggestWord.length < array[index].length) {
        biggestWord = array[index]
    }
}
console.log(biggestWord);

for (let index = 0; index < array.length; index += 1) {
    if (smallestWord.length > array[index].length) {
        smallestWord = array[index]
    }
}
console.log(smallestWord);