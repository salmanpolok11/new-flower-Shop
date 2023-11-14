import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Router = () => {
  return (
    <div className=" bg-[#F2F2F2]   mx-auto	">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Router;
