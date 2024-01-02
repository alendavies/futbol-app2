import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-base w-full h-screen">
            <Navbar />
            <div className="p-8">{children}</div>
        </div>
    );
}

export default Layout;
