import { League } from "api-football-beta-ts-test";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { leagueClient } from "../../api";
import Header from "../../components/Header";

function CompPage() {
    const [comp, setComp] = useState<League>();

    const { competitionId: compId } = useParams();
    console.log(compId);

    useEffect(() => {
        leagueClient
            .getLeagueById(Number(compId), { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setComp(res));
    }, [compId]);

    return (
        <>
            {comp && (
                <div>
                    <Header
                        name={comp.league.name}
                        logo={comp.league.logo}
                        background=""
                    />
                </div>
            )}
        </>
    );
}

export default CompPage;
