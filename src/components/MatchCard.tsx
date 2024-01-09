import { Fixture } from "api-football-beta-ts-test";
import { PiWarning, PiWarningCircle } from "react-icons/pi";

const formatTime = (date: string) => {
    return new Intl.DateTimeFormat("es-ES", {
        hour: "numeric",
        minute: "numeric",
    }).format(new Date(date));
};

const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("es-ES", {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
    }).format(new Date(date));
};

const today = formatDate(new Date().toISOString());

const matchStatus = (status: string, date: string, time: number) => {
    if (formatDate(date) != today) {
        if (status === "Match Finished") {
            return (
                <>
                    <p className="font-bold text-md">{formatDate(date)}</p>
                    <p className="font-bold text-md">Finalizado</p>
                </>
            );
        } else {
            return (
                <>
                    <p className="font-bold text-md">{formatDate(date)}</p>
                    <p className="font-bold text-md">{formatTime(date)}</p>
                </>
            );
        }
    } else if (status === "Match Finished") {
        return (
            <>
                <p className="font-bold">Hoy</p>
                <p>Finalizado</p>
            </>
        );
    } else if (status === "Not Started") {
        return <p className="font-bold text-md">{formatTime(date)}</p>;
    } else if (status === "Match Postponed") {
        return (
            <>
                <p className="text-warning text-xl font-semibold">
                    <PiWarningCircle />
                </p>
                <p className="text-warning font-semibold">Postpuesto</p>
            </>
        );
    } else if (status === "Match Cancelled") {
        return (
            <>
                <p className="text-error text-xl font-semibold">
                    <PiWarning />
                </p>
                <p className="text-error font-semibold">Cancelado</p>
            </>
        );
    } else {
        return <p className="text-primary font-bold">{time}'</p>;
    }
};

function MatchCard({ fixture }: { fixture: Fixture }) {
    return (
        <div className="flex flex-col items-start justify-center space-y-4 w-full cursor-pointer hover:-translate-y-2 duration-500 h-full ">
            <div className="w-full h-full card bg-base-content rounded-md grid grid-cols-12 p-4 space-x-2 divide-x divide-base-100">
                <div className="col-span-8 flex flex-col justify-center items-center space-y-3 text-white text-sm w-full">
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center space-x-2">
                            <img
                                src={fixture.teams.home.logo}
                                alt="home team logo"
                                className="w-7 h-auto"
                            />
                            <p>{fixture.teams.home.name}</p>
                        </div>
                        <p className="font-bold">{fixture.goals.home}</p>
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex items-center space-x-2">
                            <img
                                src={fixture.teams.away.logo}
                                alt="away team logo"
                                className="w-7 h-auto"
                            />
                            <p>{fixture.teams.away.name}</p>
                        </div>

                        <p className="font-bold">{fixture.goals.away}</p>
                    </div>
                </div>
                <div className="h-full flex justify-center items-center col-span-4">
                    <div className="flex flex-col justify-center items-center text-white text-sm pl-4">
                        {matchStatus(
                            fixture.fixture.status.long,
                            fixture.fixture.date,
                            fixture.fixture.status.elapsed
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchCard;
