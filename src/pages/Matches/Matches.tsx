import TodayMatches from "./TodayMatches";

function Matches() {
    return (
        <div className="p-4">
            <p className="text-white font-bold text-xl">Partidos de hoy</p>
            <p className="text-neutral-400">
                {new Intl.DateTimeFormat("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                }).format(new Date())}
            </p>
            <TodayMatches />
        </div>
    );
}

export default Matches;
