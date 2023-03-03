let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 60,
    },
};

// Complete a função customerInfo() para que seu retorno seja similar a 'Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.

function customerInfo(order) {
    return 'Olá, ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R. ' + order.address.street + ', Nº: ' + order.address.number + ', AP: ' + order.address.apartment;
}

customerInfo(order);
// console.log(customerInfo(order));


// Complete a função orderModifier() para que seu retorno seja similar a 'Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
// -- Modifique o nome da pessoa compradora para Luiz Silva;
// -- Modifique o valor total da compra para R$ 50,00.

function orderModifier(order) {
    let newConsumer = order.name = 'Luiz Silva'
    let newTotalPrice = order.payment.total = 50
    let pizzas = Object.keys(order.order.pizza)
    let pizza1 = pizzas[0]
    let pizza2 = pizzas[1]
    let coke = order.order.drinks.coke.type
    console.log(pizza2);
    console.log('Olá, ' + newConsumer + ', o valor total de seu pedido de ' + pizza1 + ', ' + pizza2 + ' e ' + coke + ' é R$ 50,00.');
}

orderModifier(order);