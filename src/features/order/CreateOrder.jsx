// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Footer from '../../ui/Footer';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const errMssg = useActionData();

  return (
    <div className="mx-auto my-2 max-w-[750px]">
      <h2 className="mb-6 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST" className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label>First Name:</label>
          <div>
            <input
              type="text"
              name="customer"
              required
              className="w-80 rounded-full border-1 border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-800 caret-yellow-400 outline-yellow-400 transition-all duration-300 focus:outline-2"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label>Phone number:</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
              className="w-80 rounded-full border-1 border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-800 caret-yellow-400 outline-yellow-400 transition-all duration-300 focus:outline-2"
            />
            {errMssg?.phone && <p>{errMssg.phone}</p>}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label>Address:</label>
          <div className="relative">
            <input
              type="text"
              name="address"
              required
              className="w-80 rounded-full border-1 border-stone-200 bg-white px-4 py-1.5 text-sm text-stone-800 caret-yellow-400 outline-yellow-400 transition-all duration-300 focus:outline-2"
            />
            <button className="absolute top-[3.4px] right-0.5 w-max cursor-pointer rounded-full bg-yellow-400 px-2 py-[10px] text-xs font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300">
              get position
            </button>
          </div>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-3.5 w-3.5 cursor-pointer border-none accent-yellow-400 outline-offset-3 outline-yellow-400 focus:outline-3"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-semibold">
            Want to yo give your order priority?
          </label>
        </div>

        <input type="hidden" name="cart" value={JSON.stringify(cart)} />
        <div className="mt-3">
          <button
            disabled={isSubmitting}
            type="submit"
            className="w-max cursor-pointer rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300"
          >
            {isSubmitting ? 'Placing order..' : 'Order now'}
          </button>
        </div>
      </Form>
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // If everything is okay, create new order and redirect
  const newOrder = await createOrder(order);

  // Do NOT overuse
  // store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
