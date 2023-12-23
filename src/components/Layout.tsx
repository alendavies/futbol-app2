import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-secondary w-full h-screen">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;
