import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Search from "./pages/Search";
import GamesList from "./pages/GamesList";
import GameDetails from "./pages/GameDetails";
import NotFound from "./pages/NotFound";

// layouts
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="games" element={<GamesList />} />
          <Route path="games/:id" element={<GameDetails />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
