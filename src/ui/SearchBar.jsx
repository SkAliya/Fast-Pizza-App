import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [id, setId] = useState("");
  const navigate = useNavigate();
  function handleSearchId(e) {
    e.preventDefault();
    if (!id) return;
    navigate(`/order/${id}`);
    console.log(id);
    setId("");
  }
  return (
    <div>
      <form onSubmit={handleSearchId}>
        <input type="text" className="w-28 text-stone-800 bg-yellow-100 px-4 py-2 outline-none transition-all  duration-300 text-sm focus:ring-2 ring-stone-300 rounded-full ease-in-out focus:w-40 caret-stone-400"value={id}  placeholder="Search #ID " onChange={(e) => setId(e.target.value)} />
      </form>
    </div>
  );
}

export default SearchBar;
