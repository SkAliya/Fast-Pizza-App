function Home() {
  return (
    <div className="mx-auto flex w-96 flex-col items-center gap-5 pt-7 text-center">
      <h1 className="text-3xl/6 font-bold tracking-wide">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <div>
        <p className="mb-3 text-lg text-stone-500">
          👋 Welcome! Type your name to get start:
        </p>
        <input
          type="text"
          className="mx-auto w-40 rounded-full border-2 border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 caret-yellow-400 transition-all duration-300 outline-none focus:border-yellow-400"
          placeholder="Your full name"
        />
      </div>

      <button className="w-max cursor-pointer rounded-full bg-yellow-400 px-3 py-2 text-sm font-semibold tracking-wider text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300">
        {' '}
        start ordering
      </button>
    </div>
  );
}

export default Home;
