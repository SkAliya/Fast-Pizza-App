import { useNavigate, useRouteError } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const errMess = useRouteError();
  // console.log(errMess.message,errMess.data);

  // if (errMess.data || errMess.message) return <Error />;

  return (
    <div className="mx-auto my-2 max-w-[750px] space-y-2">
      <h1 className="text-lg font-semibold">Something went wrong 😢</h1>
      <p className="font-light">{errMess.data || errMess.message}</p>
      <button
        onClick={() => navigate(-1)}
        className="text-md text-blue-400 underline-offset-2 transition-all duration-300 hover:text-blue-600 hover:underline"
      >
        &larr; Go back
      </button>
    </div>
  );
}

export default NotFound;
