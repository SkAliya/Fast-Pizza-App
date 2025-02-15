import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import Footer from "../../ui/Footer";

function Menu() {
  const menu = useLoaderData();

  return (
    <>
    <ul>
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
      <Footer />
    </>
  );
}

export default Menu;

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const data = await getMenu();
  return data;
}
