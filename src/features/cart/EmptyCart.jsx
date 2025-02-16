import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="mx-auto my-2 max-w-[750px] space-y-3">
      <div>
        <Link
          to="/menu"
          className="text-md text-blue-400 underline-offset-2 transition-all duration-300 hover:text-blue-600 hover:underline"
        >
          &larr; Back to menu
        </Link>
      </div>

      <p className="text-lg font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
