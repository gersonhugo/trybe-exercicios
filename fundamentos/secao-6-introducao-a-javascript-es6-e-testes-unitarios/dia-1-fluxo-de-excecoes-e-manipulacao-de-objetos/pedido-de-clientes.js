const order = {
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
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phoneNumber = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;

    return console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, N°: ${number}, AP: ${apartment}`);
  };
  
    customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    order.payment.total = 50;

    const name = order.name;
    const pizza = Object.keys(order.order.pizza);
    const drinks = order.order.drinks.coke.type;
    const total = order.payment.total;
    
    return console.log(`Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drinks} é R$ ${total},00.`);
  };
  
  orderModifier(order);
  