import { formatCurrency } from '../../utilities/helpers';

function MenuItem({ pizza }) {
  //
  const { name, id, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
        {!soldOut && (
          <button className="ml-auto w-max cursor-pointer self-end rounded-full bg-yellow-400 px-2.5 py-1.5 text-xs font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300">
            add to cart
          </button>
        )}
      </li>
      <div className="last-of-type:bg- my-1.5 h-[.5px] bg-stone-200 last-of-type:bg-stone-100"></div>
    </>
  );
}

export default MenuItem;
