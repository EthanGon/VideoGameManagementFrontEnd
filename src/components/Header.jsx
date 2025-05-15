import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-neutral-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold md:text-4xl">
          Home
        </Link>
        <nav className="space-x-6 text-lg font-medium md:text-2xl">
          <Link to="/games" className="hover:opacity-90">
            Games
          </Link>
          <Link to="/search" className="hover:opacity-90">
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
