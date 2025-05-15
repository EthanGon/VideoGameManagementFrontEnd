import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Search from "./pages/Search";
import Home from "./pages/Home";
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
          <Route path="games/:id" element={<GameDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
