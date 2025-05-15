import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate("/search", { state: { query } });
      setQuery("");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSearch}
      className="relative w-full md:w-64"
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-full rounded bg-white px-4 py-2 pr-10 text-black placeholder-gray-500"
      />
      <FaSearch
        className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-600 hover:text-black"
        onClick={() => formRef.current?.requestSubmit()}
      />
    </form>
  );
};

export default SearchBar;
