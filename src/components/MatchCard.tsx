function MatchCard() {
    return (
        <div className="flex flex-col items-start justify-center ml-8 mt-6 space-y-4 w-fit">
            <div>
                <div className="flex flex-row items-center space-x-4">
                    <div className="avatar placeholder ">
                        <div className="bg-neutral text-neutral-content rounded-full w-12">
                            <span>P</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-white text-xl font-semibold">
                            Premier League
                        </p>
                        <p className="text-neutral">Jornada n°</p>
                    </div>
                </div>
            </div>
            <div className="w-full h-full bg-primary rounded-md flex justify-center items-center">
                <div className="grid grid-cols-8 gap-2 p-4">
                    <div className="flex flex-col pl-2 py-2 space-y-2 col-span-1">
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">MU</span>
                            </div>
                        </div>
                        <div className="avatar placeholder">
                            <div className="bg-neutral text-neutral-content rounded-full w-8">
                                <span className="text-xs">MC</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col col-span-3 justify-center space-y-4 pl-2 text-white text-sm">
                        <p>Manchester United</p>
                        <p>Manchester City</p>
                    </div>
                    <div className="flex flex-col col-span-1 text-white text-md font-bold space-y-4 justify-center items-center">
                        <p>1</p>
                        <p>0</p>
                    </div>
                    <div className="col-span-3 border-l-[1.5px] border-neutral border-spacing-x-7 flex flex-col justify-center items-center text-white text-sm">
                        <p className="font-bold">Hoy</p>
                        <p>Fin del partido</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
