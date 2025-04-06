import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import WhatsAppBtn from "../components/WhatsAppBtn";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
      <WhatsAppBtn />
    </main>
  </>
);

export default Layout;