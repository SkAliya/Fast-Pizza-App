import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-6  bg-yellow-400 text-stone-800 ">
      <h1 className="text-stone-700
       tracking-widest
       uppercase">fast pizza co.</h1>
      <SearchBar />
    </div>
  );
}

export default Header;
