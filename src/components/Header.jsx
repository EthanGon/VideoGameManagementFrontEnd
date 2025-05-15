import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-neutral-900 text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 p-4 md:flex-row md:items-center md:gap-0">
        <Link
          to="/"
          className="text-2xl font-bold hover:opacity-90 md:text-4xl"
        >
          Home
        </Link>
        <nav className="flex w-full flex-col items-start gap-4 text-lg font-medium md:w-auto md:flex-row md:items-center md:gap-0 md:space-x-6 md:text-2xl">
          <Link to="/games" className="hover:opacity-90">
            Games
          </Link>
          <SearchBar />
        </nav>
      </div>
    </header>
  );
};

export default Header;
