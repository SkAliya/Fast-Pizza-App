function Home() {
  return (
    <div className="flex flex-col gap-5 pt-9 items-center text-center w-96  mx-auto">
      <h1 className="text-3xl/6 font-bold ">
        The best pizza.
        <br />
        <span className="text-yellow-500 tracking-wider">Straight out of the oven, straight to you.</span>
      </h1>
      <div>
        
      <p className="text-lg text-stone-500 mb-3">👋 Welcome! Type your name to get start:</p>
        <input type="text" className="w-40 mx-auto text-stone-800 bg-white px-4 py-2 outline-none caret-yellow-400 transition-all duration-300 focus:border-yellow-400 text-sm border-2 border-stone-200 rounded-full" placeholder="Your full name" />
      </div>
        <button className="px-3 py-2 bg-yellow-400 text-stone-800 uppercase  rounded-full tracking-wider font-semibold text-sm w-max hover:bg-yellow-300 transition-colors duration-300 cursor-pointer">start ordering</button>
    </div>
  );
}

export default Home;
