import { Fixture } from "api-football-beta-ts-test";

function MatchCard({ fixture }: { fixture: Fixture }) {
    return (
        <div className="flex flex-col items-start justify-center ml-8 mt-6 space-y-4 w-fit">
            <div className="w-full h-full card bg-base-content rounded-md flex justify-center items-center">
                <div className="grid grid-cols-8 gap-2 p-4">
                    <div className="flex flex-col pl-2 py-2 space-y-2 col-span-1">
                        <img
                            src={fixture.teams.home.logo}
                            alt="home team logo"
                            className="w-7 h-7"
                        />
                        <img
                            src={fixture.teams.away.logo}
                            alt="away team logo"
                            className="w-7 h-7"
                        />
                    </div>
                    <div className="flex flex-col col-span-3 justify-center space-y-4 pl-2 text-white text-sm">
                        <p>{fixture.teams.home.name}</p>
                        <p>{fixture.teams.away.name}</p>
                    </div>
                    <div className="flex flex-col col-span-1 text-white text-md font-bold space-y-4 justify-center items-center">
                        <p>{fixture.goals.home}</p>
                        <p>{fixture.goals.away}</p>
                    </div>
                    <div className="col-span-3 border-l-[1.5px] border-neutral border-spacing-x-7 flex flex-col justify-center items-center text-white text-sm">
                        <p className="font-bold">Hoy</p>
                        <p>{fixture.fixture.status.long}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
