import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-base w-full h-screen">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
