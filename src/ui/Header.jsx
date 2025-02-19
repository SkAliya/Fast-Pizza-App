import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { userLoggout } from '../features/user/userSlice';
import { clearCart } from '../features/cart/cartSlice';

function Header() {
  const [loggout, setLoggout] = useState(false);
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleClick() {
    dispatch(userLoggout());
    navigate('/');
  }

  return (
    <div className="flex items-center justify-between bg-yellow-400 px-6 py-1.5 text-stone-800">
      {/* px-6 py-1.5 */}
      <Link
        to="/"
        className="font-mono text-lg tracking-[.4em] text-stone-700 uppercase"
      >
        fast pizza co.
      </Link>
      <SearchBar />
      {userName && (
        <p
          className="relative flex items-center space-x-2 text-lg font-semibold text-stone-800"
          onClick={() => setLoggout(!loggout)}
        >
          <span className="cursor-pointer">{userName}</span>

          {loggout ? (
            <button
              onClick={handleClick}
              className="w-max cursor-pointer rounded-full border-stone-800 px-2 py-1 text-sm font-semibold tracking-wider text-stone-800 uppercase ring-2 ring-stone-800 transition-colors duration-300 hover:bg-stone-800 hover:text-stone-100"
            >
              Logout
            </button>
          ) : (
            <svg
              width="26px"
              height="26px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#121212"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
                <path
                  d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          )}
        </p>
      )}
    </div>
  );
}

export default Header;
