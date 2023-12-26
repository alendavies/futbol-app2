function Navbar() {
    return (
        <div className="navbar bg-neutral">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-primary shadow-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    Futbol App
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered text-white w-24 md:w-auto"
                    />
                </div>
                <button className="btn btn-ghost btn-circle text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
