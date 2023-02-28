let pXadrez = "BISPO"; // Peao, Bispo, Cavalo, Torre, Dama, Rei
let result = pXadrez.toLowerCase();

switch (result) {
    case 'peao':
        console.log('Peão: Caso seja a primeira vez sendo movimentada pode ir 2 casas para frente, do contrário, está peça só pode andar uma casa para frente');        
        break;
    case 'bispo':
        console.log('Bispo: Está peça só pode andar na diagonal.');
        break
    case 'cavalo':
        console.log('Cavalo: Está peça vai 2 casas para a direção escolhida, não sendo a diagonal, e depois 1 casa para o lado.');
        break
    case 'torre':
        console.log('Torre: Está peça pode andar para frente ou para os lados');
        break
    case 'dama':
        console.log('Dama: Está peça pode andar quantas casas quiser para qualquer lado');
        break
    case 'rei':
        console.log('Rei: Está peça pode andar 1 casa para qualquer lado');
        break
    default:
        console.log('Peça inválida');
}