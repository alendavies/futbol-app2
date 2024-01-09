function Header({
    logo,
    name,
    background,
}: {
    logo: string;
    name: string;
    background: string;
}) {
    return (
        <>
            <div
                className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat bg-center h-[60vh]"
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className="flex flex-row space-x-4 items-center h-full bg-black/40 shadow-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] pl-8">
                    <img
                        src={logo}
                        alt={name}
                        className="w-[120px] h-[120px]"
                    />
                    <p className="font-bold text-7xl text-white">
                        {name.toUpperCase()}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Header;
