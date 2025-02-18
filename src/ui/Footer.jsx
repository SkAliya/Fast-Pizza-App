import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utilities/helpers';

function Footer() {
  const cart = useSelector((store) => store.cart.cartArray);
  const totalAmount = cart.reduce(
    (acc, curr) => acc + curr.unitPrice * curr.quantity,
    0,
  );
  const totalQuantity = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <footer className="flex gap-4 bg-stone-800 px-6 py-2 text-lg font-semibold text-stone-100 uppercase">
      <span>{totalQuantity} pizza&apos;s</span>
      {/* <span>€{totalAmount}.00</span> */}
      <span>{formatCurrency(totalAmount)}</span>

      <Link
        to="/cart"
        className="ml-auto font-light underline-offset-4 hover:underline"
      >
        open cart →
      </Link>
    </footer>
  );
}

export default Footer;
