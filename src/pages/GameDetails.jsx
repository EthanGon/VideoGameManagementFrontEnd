import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGame, addGame, updateGame } from "../services/GameService";

const GameDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const getGameDetails = async () => {
      const response = await getGame(id);
      const json = await response.json();

      if (!response.ok) {
        navigate("/404");
      }

      if (response.ok) {
        setGame(json);
        setStatus(json.status);
      }
    };

    getGameDetails();
  }, [id, navigate]);

  const addNewGame = async (e) => {
    const newGame = {
      gameId: id,
      title: game.title,
      description: game.description,
      cover: game.cover,
      status: e.target.value,
    };

    const response = await addGame(newGame);
    const json = await response.json();

    if (response.ok) {
      setGame(json);
      setStatus(json.status);
    }
  };

  const updateGameStatus = async (e) => {
    const updatedStatus = {
      status: e.target.value,
    };

    const response = await updateGame(id, updatedStatus);
    const json = await response.json();

    if (response.ok) {
      setGame(json);
      setStatus(json.status);
    }
  };

  return (
    <section className="mx-auto max-w-6xl flex-col items-start justify-between gap-4 p-4 text-slate-100 md:flex-row md:items-center md:gap-0">
      {game ? (
        <div className="flex flex-col items-center border-b-2 border-slate-100 p-3 py-8 last:border-b-0 md:flex-row md:items-start">
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
          <div className="flex-1 px-6">
            <h2 className="mb-4 text-2xl font-bold hover:opacity-90">
              {game.title}
            </h2>
            <p>{game.description}</p>
            <div className="mt-4 flex flex-col space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-2">
              <button
                className={`cursor-pointer rounded-md px-6 py-3 hover:opacity-90 ${
                  status === "playing" ? "bg-green-600" : "bg-blue-900"
                }`}
                value="playing"
                disabled={status === "playing"}
                onClick={status ? updateGameStatus : addNewGame}
              >
                Playing
              </button>
              <button
                className={`cursor-pointer rounded-md px-6 py-3 hover:opacity-90 ${
                  status === "completed" ? "bg-green-600" : "bg-blue-900"
                }`}
                value="completed"
                disabled={status === "completed"}
                onClick={status ? updateGameStatus : addNewGame}
              >
                Completed
              </button>
              <button
                className={`cursor-pointer rounded-md px-6 py-3 hover:opacity-90 ${
                  status === "planning" ? "bg-green-600" : "bg-blue-900"
                }`}
                value="planning"
                disabled={status === "planning"}
                onClick={status ? updateGameStatus : addNewGame}
              >
                Planning
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>Game Not Found</h1>
        </div>
      )}
    </section>
  );
};

export default GameDetails;
