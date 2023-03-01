let clientesTrybeBank = ['Ada', 'John', 'Gus'];
// let messageInsert = 'Nome inserido';
// let messageRemove = 'Nome retirado';
// let message = '';

function addClients(client) {
    if (typeof client != 'string') {
        message = 'Mensagem de erro'
    }
    else {
        clientesTrybeBank.push(client)
    }
}
addClients('Gabriel')

function removeClient(client) {
    if (typeof client != 'string') {
        message = 'Mensagem de erro'
    }
    else {
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (client === clientesTrybeBank[index]){
                clientesTrybeBank.splice(index, 1)
            }
            else {
                message = 'Nome inexistente'
            }
        }
    }
}
removeClient('Ada')