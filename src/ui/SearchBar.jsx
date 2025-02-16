import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [id, setId] = useState('');
  const navigate = useNavigate();
  function handleSearchId(e) {
    e.preventDefault();
    if (!id) return;
    navigate(`/order/${id}`);
    console.log(id);
    setId('');
  }
  return (
    <div>
      <form onSubmit={handleSearchId}>
        <input
          type="text"
          className="w-28 rounded-full bg-yellow-100 px-3 py-1.5 text-sm text-stone-800 caret-stone-400 ring-stone-300 transition-all duration-300 ease-in-out outline-none focus:w-40 focus:ring-2"
          value={id}
          placeholder="Search #ID "
          onChange={(e) => setId(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
