import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
  </>
);

export default Layout;