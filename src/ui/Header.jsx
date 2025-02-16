import SearchBar from './SearchBar';

function Header() {
  return (
    <div className="flex items-center justify-between bg-yellow-400 px-6 py-1.5 text-stone-800">
      <h1 className="font-mono text-lg tracking-[.4em] text-stone-700 uppercase">
        fast pizza co.
      </h1>
      <SearchBar />
    </div>
  );
}

export default Header;
