import { Link } from 'react-router-dom';

import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, deletePizza } from './cartSlice';
import { formatCurrency } from '../../utilities/helpers';

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: 'Mediterranean',
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: 'Vegetale',
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: 'Spinach and Mushroom',
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = [];
  // const cart = fakeCart;
  const cart = useSelector((store) => store.cart.cartArray);
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mx-auto my-2 flex max-w-[750px] flex-col gap-6">
      <Link
        to="/menu"
        className="text-md text-blue-400 underline-offset-2 transition-all duration-300 hover:text-blue-600 hover:underline"
      >
        &larr; Back to menu
      </Link>
      <div>
        <h2 className="mb-3.5 text-xl font-semibold">Your cart, {userName}</h2>
        <ul className="flex flex-col gap-1.5">
          {cart.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </ul>
      </div>
      <div className="space-x-2">
        <Link
          to="/order/new"
          className="w-max cursor-pointer rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300"
        >
          Order pizzas
        </Link>
        <button
          className="w-max cursor-pointer rounded-full border-stone-200 px-3 py-1.5 text-sm font-semibold tracking-wider text-stone-400 uppercase ring-2 ring-stone-200 transition-colors duration-300 hover:bg-stone-200 hover:text-stone-700"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;

function Item({ item }) {
  const dispatch = useDispatch();
  console.log(item);
  function handleDeletePizza(id) {
    dispatch(deletePizza(id));
  }
  return (
    <>
      <li className="flex items-center justify-between">
        <p className="">
          {item.quantity}x {item.name}
        </p>
        <div className="space-x-4">
          <span className="text-sm font-semibold">
            {formatCurrency(item.totalPrice)}
          </span>
          <button
            className="w-max cursor-pointer rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300"
            onClick={() => handleDeletePizza(item.id)}
          >
            delete
          </button>
        </div>
      </li>
      <div className="my-0.5 h-[.5px] bg-stone-200"></div>
    </>
  );
}
