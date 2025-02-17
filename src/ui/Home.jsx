import CreateUser from '../features/user/CreateUser';

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
      <CreateUser />
    </div>
  );
}

export default Home;
