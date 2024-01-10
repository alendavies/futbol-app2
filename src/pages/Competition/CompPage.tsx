import { League } from "api-football-beta-ts-test";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { leagueClient } from "../../api";
import Header from "../../components/Header";
import SeasonCalendar from "./SeasonCalendar";
import LastMatchesResults from "./LastMatchesResults";
import Clasification from "./Clasification";

function CompPage() {
    const [comp, setComp] = useState<League>();

    const { competitionId: compId } = useParams();

    useEffect(() => {
        leagueClient
            .getLeagueById(Number(compId), { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setComp(res));
    }, [compId]);

    return (
        <>
            {comp && compId && (
                <div className="space-y-8">
                    <div>
                        <Header
                            name={comp.league.name}
                            logo={comp.league.logo}
                            background=""
                        />
                    </div>
                    {/* <SeasonCalendar compId={compId} /> */}
                    <LastMatchesResults compId={compId} />
                    {/* <Clasification compId={compId} /> */}
                </div>
            )}
        </>
    );
}

export default CompPage;
