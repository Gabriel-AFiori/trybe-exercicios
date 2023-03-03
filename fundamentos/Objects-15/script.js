let lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  let lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  let lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function nightShift(turno) {
    lesson2.turno = turno
}
nightShift('noite')
// console.log(lesson3);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function keysList(lesson) {
    for (let keys in lesson) {
        // console.log(keys);
    }
}
keysList(lesson1)

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function objectLength(lesson) {
    let keysLength = 0;
    for (keys in lesson) {
        keysLength += [keys].length;
    }
    // console.log(keysLength);
}
objectLength(lesson1)

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function valuesList(lesson) {
    return Object.values(lesson)
}
// console.log(valuesList(lesson1));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
let allLessons = {}
console.log(Object.assign(allLessons, {
    'lesson1': lesson1,
    'lesson2': lesson2,
    'lesson3': lesson3
}));