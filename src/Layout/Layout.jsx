import { Outlet } from "react-router-dom";
import Footer from "../Sections/Footer/Footer";
import { StickyNavbar } from "../Sections/Header/Navbar";



const Layout = () => {
    return (
        <div className="max-w-1280px mx-auto ">
            <StickyNavbar></StickyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;