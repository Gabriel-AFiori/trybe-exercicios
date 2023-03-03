let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// console.log('Boas vindas ' + info.personagem);

info.recorrente = 'Sim'

// console.log(info);

for (let keys in info) {
    // console.log(keys);
}

for (let keys in info) {
    // console.log(info[keys]);
}
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };
  
  for (let keys in info) {
    // console.log(info[key] + ' e ' + info2[key]);
    if (keys === 'recorrente' && info[keys] === 'Sim') {
        recorrente = console.log('Ambos recorrentes');
    } else {
        console.log(info[keys] + ' e ' + info2[keys]);
    }
  }