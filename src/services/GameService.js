const API_URL = "http://localhost:8080/api";

export const searchGames = (query) => {
  return fetch(`${API_URL}/games/search/${query}`, {
    method: "GET",
  });
};
