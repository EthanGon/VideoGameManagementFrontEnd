import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchGames } from "../services/GameService";

const Search = () => {
  const location = useLocation();
  const query = location.state?.query || "";
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      const response = await searchGames(query);
      const json = await response.json();

      if (!response.ok) {
        console.log(json.error);
      }

      if (response.ok) {
        console.log(json);
        setGames(json);
      }
    };

    getGames();
  }, [query]);

  return (
    <div>
      <section className="mx-auto max-w-6xl flex-col items-start justify-between gap-4 p-4 text-slate-100 md:flex-row md:items-center md:gap-0">
        <h1 className="text-center text-4xl font-bold">
          {games.length} results for {query}
        </h1>
        {games.length > 0 && (
          <ul className="my-5 flex flex-col rounded-md p-2">
            {games.map((game) => (
              <li
                key={game.gameId}
                className="flex flex-col items-center border-b-2 border-slate-100 p-3 py-8 last:border-b-0 md:flex-row md:items-start"
              >
                <Link to={`/games/${game.gameId}`} className="hover:opacity-90">
                  {game.cover ? (
                    <img
                      src={game.cover}
                      alt={game.title}
                      className="mb-4 h-48 border border-slate-100 object-cover object-center md:mb-0 md:h-60"
                    />
                  ) : (
                    <div className="mb-4 flex h-48 w-44 items-center border border-slate-100 object-cover object-center text-center md:mb-0 md:h-60">
                      {game.title}
                    </div>
                  )}
                </Link>
                <div className="flex-1 px-6">
                  <Link
                    to={`/games/${game.gameId}`}
                    className="hover:opacity-90"
                  >
                    <h2 className="mb-4 text-2xl font-bold hover:opacity-90">
                      {game.title}
                    </h2>
                  </Link>
                  <p>{game.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Search;
