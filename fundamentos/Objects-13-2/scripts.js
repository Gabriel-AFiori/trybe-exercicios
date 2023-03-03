let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  //no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '"');

  leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban', autor: 'JK Rowling', editora: 'Rocco',})
  console.log(leitor);

  //no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

  console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');