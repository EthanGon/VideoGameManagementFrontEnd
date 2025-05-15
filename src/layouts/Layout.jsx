import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-900">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
