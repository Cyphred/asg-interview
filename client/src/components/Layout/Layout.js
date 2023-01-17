import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            {/* Navbar goes here */}
            <Outlet />
        </div>
    );
}
