// Test ID: IIDSAT

import { useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utilities/helpers';
import Footer from '../../ui/Footer';

// const order = {
//   id: "ABCDEF",
//   customer: "Jonas",
//   phone: "123456789",
//   address: "Arroios, Lisbon , Portugal",
//   priority: true,
//   estimatedDelivery: "2027-04-25T10:00:00",
//   cart: [
//     {
//       pizzaId: 7,
//       name: "Napoli",
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: "Diavola",
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: "Romana",
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: "-9.000,38.000",
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff

  // const {
  //   id,
  //   status,
  //   priority,
  //   priorityPrice,
  //   orderPrice,
  //   estimatedDelivery,
  //   cart,
  // } = order;
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(cart);

  return (
    <div className="mx-auto my-4 flex max-w-[750px] flex-col gap-5">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold">Order #{id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="w-max rounded-full bg-red-500/95 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase transition-colors duration-300">
              Priority
            </span>
          )}
          <span className="w-max rounded-full bg-green-500/95 px-2 py-0.5 text-sm font-semibold tracking-wider text-slate-100 uppercase transition-colors duration-300">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between bg-stone-200 px-3.5 py-2.5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-xs text-stone-600">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-1.5 overflow-auto">
          {cart.map((item) => (
            <Item item={item} key={item.pizzaId} />
          ))}
        </ul>
        <div className="mt-3 h-[.5px] bg-stone-200"></div>
      </div>

      <div className="flex flex-col gap-1 bg-stone-200 px-3.5 py-2.5">
        <p className="text-sm font-medium">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && (
        <button className="w-max cursor-pointer self-end rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300">
          make priority
        </button>
      )}
    </div>
  );
}

function Item({ item }) {
  return (
    <>
      <div className="my-0.5 h-[.5px] bg-stone-200"></div>
      <li className="flex items-center justify-between text-sm">
        <div>
          <p>
            <span className="font-semibold">{item.quantity}x</span> {item.name}
          </p>
          <p>{item.ingredients}</p>
        </div>

        <span className="text-sm font-semibold">€{item.totalPrice}.00</span>
      </li>
      {/* <div className="my-0.5 h-[.5px] bg-stone-200"></div> */}
    </>
  );
}

export default Order;

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}
