let saldo = 100; // Quantidade em conta de determinada pessoa

function addValue(balance) {
    saldo += balance    
}

function subtractValue(balance) {
    saldo -= balance
}

function taxedValue(balance) {
    saldo *= balance
}

function dividedValue(balance) {
    saldo /= balance
}

addValue(1000)
subtractValue(500)
taxedValue(0.63)
dividedValue(3)
console.log(saldo);