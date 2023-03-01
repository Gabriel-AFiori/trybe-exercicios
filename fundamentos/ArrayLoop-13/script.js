let crescentNumbers = ['Growing Numbers: '];
let decrescentNumbers = ['Decreasing Numbers: '];

function sortedNumbers(numbers) {
    for (let index = 0; index < numbers.length; index += 1) {
        crescentNumbers = crescentNumbers + numbers.sort((a, b) => a - b)[index] + ', '
    }
    for (let index = 0; index < numbers.length; index += 1) {
        decrescentNumbers = decrescentNumbers + numbers.sort((a, b) => b - a)[index] + ', '
    }
}

sortedNumbers([19, 23, 2, 7, 10, 50, 9, 17, 72, 47]);
console.log(crescentNumbers);
console.log(decrescentNumbers);