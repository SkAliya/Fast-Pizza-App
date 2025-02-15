import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const errMess = useRouteError();
  // console.log(errMess.message,errMess.data);

  // if (errMess.data || errMess.message) return <Error />;

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errMess.data || errMess.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
