import { useDispatch, useSelector } from 'react-redux';
import { formatCurrency } from '../../utilities/helpers';
import {
  addNewPizza,
  decreaseQuantity,
  deletePizza,
  increaseQuantity,
} from '../cart/cartSlice';

function MenuItem({ pizza }) {
  //
  const { name, id, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.cartArray);
  const currPizza = cart.find((pizza) => pizza.pizzaId === id);

  function handleAddPizza() {
    let newPizza = {
      pizzaId: id,
      name: name,
      unitPrice: unitPrice,
      quantity: 1,
      totalPrice: 1 * unitPrice,
    };

    dispatch(addNewPizza(newPizza));
  }

  function handleDeletePizza(id) {
    dispatch(deletePizza(id));
  }

  function handleIncrementQuantity(id) {
    dispatch(increaseQuantity(id));
  }
  function handleDecrementQuantity() {
    dispatch(decreaseQuantity(id));
  }
  return (
    <>
      <li className="flex items-start gap-3">
        <img
          src={imageUrl}
          alt={name}
          className={`h-14 ${soldOut ? 'grayscale' : ''}`}
        />
        <div className="flex flex-col self-stretch">
          <div>
            <p className="text-md mb-0.5 font-semibold text-stone-700">
              {name}
            </p>
            <p className="text-sm text-stone-500 capitalize italic">
              {ingredients.join(', ')}
            </p>
          </div>
          <div className="mt-auto">
            {!soldOut ? (
              <p className="text-md font-mono text-stone-600">
                {formatCurrency(unitPrice)}
              </p>
            ) : (
              <p className="text-sm font-semibold tracking-widest text-stone-400 uppercase">
                Sold out
              </p>
            )}
          </div>
        </div>
        {/* {!soldOut && !isInCart && ( */}
        {!soldOut && !currPizza && (
          <button
            className="relative ml-auto w-max cursor-pointer self-end rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 active:top-[1px]"
            onClick={handleAddPizza}
          >
            add to cart
          </button>
        )}
        {currPizza && (
          <div className="ml-auto flex items-end gap-4 self-end">
            <div className="flex items-center gap-1.5">
              <button
                className="relative w-max cursor-pointer rounded-full bg-yellow-400 px-[12px] py-[5px] text-base font-semibold text-stone-800 transition-colors duration-300 hover:bg-yellow-300 active:top-[1px]"
                // onClick={() => handleDecrementQuantity(id)}
                onClick={handleDecrementQuantity}
              >
                -
              </button>
              <p className="text-sm font-semibold">{currPizza?.quantity}</p>
              <button
                className="relative w-max cursor-pointer rounded-full bg-yellow-400 px-[12px] py-[5px] text-base font-semibold text-stone-800 transition-colors duration-300 hover:bg-yellow-300 active:top-[1px]"
                onClick={() => handleIncrementQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              className="relative ml-auto w-max cursor-pointer rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 active:top-[1px]"
              onClick={() => handleDeletePizza(id)}
            >
              delete
            </button>
          </div>
        )}
      </li>
      <div className="last-of-type:bg- my-1.5 h-[.5px] bg-stone-200 last-of-type:bg-stone-100"></div>
    </>
  );
}

export default MenuItem;
