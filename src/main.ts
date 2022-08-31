/*
Modulos de alto nível não devem depeneder de módulos de baixo nível.
Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo
nível.
*/
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shoppingcart';
import { FiftyDiscount, NoDiscount, TenDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/msg-protocol';

const fiftyDiscount = new FiftyDiscount();
// const tenDiscount = new TenDiscount();
// const noDiscount = new NoDiscount();
const cartOne = new ShoppingCart(fiftyDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
//   'Eduardo',
//   'Castro',
//   '442.455.198-94',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'Raccoon',
  'XX.XXX.XXX/0001-XX',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(msg: string): void {
    console.log('The message was sent by the Mock');
  }
}

const messagingMock = new MessagingMock();
const order = new Order(
  cartOne,
  messagingMock,
  persistency,
  enterpriseCustomer,
);

cartOne.addItem(new Product('Shirt', 49.95));
cartOne.addItem(new Product('Pencil', 9.932));
cartOne.addItem(new Product('Shorts', 89.923));

console.log(cartOne.items);
console.log(cartOne.total());
console.log(cartOne.totalWithDiscount());

order.checkOut();
console.log(order.orderStatus);
