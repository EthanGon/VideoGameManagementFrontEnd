import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 p-4 py-20 text-center text-slate-100">
      <h1 className="text-center text-4xl font-bold text-blue-900">
        The page you are looking for does not exist.
      </h1>
      <Link
        to="/"
        className="rounded-md bg-blue-900 px-4 py-3 text-xl font-bold text-white hover:opacity-90"
      >
        Back To Home
      </Link>
    </section>
  );
};

export default NotFound;
