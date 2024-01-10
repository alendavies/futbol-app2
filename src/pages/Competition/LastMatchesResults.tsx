import { useEffect, useState } from "react";
import { MatchesByLeagueRound, getMatches } from "./getMatches";
import MatchCard from "../../components/MatchCard";

function LastMatchesResults({ compId }: { compId: string }) {
    const [matches, setMatches] = useState<MatchesByLeagueRound>({});

    useEffect(() => {
        getMatches("last", Number(compId)).then((res) => setMatches(res));
    }, [compId]);
    return (
        <div className="space-y-6">
            <p className="text-white font-bold text-xl">
                Resultados de los últimos partidos
            </p>
            {Object.entries(matches).map(([, { round, matches }]) => {
                return (
                    <div className="text-neutral-400">
                        <p>{round.replace("Regular Season -", "Jornada")}</p>

                        <div className="grid grid-cols-12 gap-10 py-6">
                            {matches.map((fixture) => (
                                <div className="col-span-4">
                                    <MatchCard fixture={fixture} />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default LastMatchesResults;
