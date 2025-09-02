import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="font-sora mx-auto w-full px-4 sm:px-6 lg:px-8">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
