import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Oops! Page not found</h1>
      <h2>
        {err.status}: {err.statusText}
      </h2>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      <p>Please check the URL or go back to the homepage.</p>
    </div>
  );
};
export default Error;
