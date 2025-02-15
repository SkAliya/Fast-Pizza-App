import { formatCurrency } from "../../utilities/helpers";

//
function OrderItem({ item }) {
  const { quantity, isLoadingIngredients, ingredients, name, totalPrice } =
    item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
