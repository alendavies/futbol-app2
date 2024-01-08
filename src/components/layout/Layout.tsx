import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
    return (
        <div className="bg-base-100 w-full h-screen">
            <Navbar />
            <div className="p-8">
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
