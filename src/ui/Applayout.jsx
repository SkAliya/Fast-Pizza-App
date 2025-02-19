import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../ui/Header';

// import Footer from '../ui/Footer';
import Loader from './Loader';
import { useSelector } from 'react-redux';
import Footer from './Footer';

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // const isLoading = true;
  const cart = useSelector((store) => store.cart.cartArray);
  // console.log(cart.length, cart);

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto] gap-4.5">
      {isLoading && <Loader />}
      <Header />

      <main className="overflow-auto">
        <Outlet />
      </main>
      {cart.length > 0 && <Footer />}
      {/* <Footer /> */}
    </div>
  );
}

export default Applayout;
