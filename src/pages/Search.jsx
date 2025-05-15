import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const query = location.state?.query || "";

  return (
    <div>
      <h1 className="text-4xl font-bold underline">
        {0} results for {query}
      </h1>
    </div>
  );
};

export default Search;
