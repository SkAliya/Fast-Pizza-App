import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../ui/Header';

// import Footer from '../ui/Footer';
import Loader from '../ui/Loader';

function Applayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  // const isLoading = true;
  console.log(navigation);

  return (
    <div className="">
      {isLoading && <Loader />}
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Applayout;
