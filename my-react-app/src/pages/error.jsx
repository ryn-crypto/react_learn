import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="my-5 text-xl">{error.statusText || error.message}</p>
      <pre className="text-sm">{error.stack}</pre>
    </div>
  );
};

export default ErrorPage;
