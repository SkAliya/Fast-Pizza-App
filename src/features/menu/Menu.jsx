import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';
import Footer from '../../ui/Footer';

function Menu() {
  const menu = useLoaderData();

  return (
    <ul className="mx-auto my-2 flex w-[750px] flex-col">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const data = await getMenu();
  return data;
}
