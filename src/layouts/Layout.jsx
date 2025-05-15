import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="h-screen bg-blue-900">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
