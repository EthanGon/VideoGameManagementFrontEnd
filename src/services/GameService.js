const API_URL = "http://localhost:8080/api";

export const searchGames = (query) => {
  return fetch(`${API_URL}/games/search/${query}`, {
    method: "GET",
  });
};

export const getGame = (id) => {
  return fetch(`${API_URL}/games/${id}`, {
    method: "GET",
  });
};

export const addGame = (game) => {
  return fetch(`${API_URL}/games`, {
    method: "POST",
    body: JSON.stringify(game),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateGame = (id, updatedStatus) => {
  return fetch(`${API_URL}/games/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedStatus),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
