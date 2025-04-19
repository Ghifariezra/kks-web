// layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../component/Shared/Header.jsx";
import Footer from "../component/Shared/Footer.jsx";
import "../css/main.css";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
