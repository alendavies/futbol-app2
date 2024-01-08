import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { fixtureClient, leagueClient, teamClient } from "../../api";
import { Fixture, League, Team } from "api-football-beta-ts-test";
import { useCallback, useEffect, useState } from "react";
import MatchCard from "../../components/MatchCard";
import Select from "../../components/Select";

function TeamPage() {
    const [team, setTeam] = useState<Team>();

    const { teamId } = useParams();
    const [leagues, setLeagues] = useState<League[]>();
    const [lastMatch, setLastMatch] = useState<Fixture>();
    const [nextMatch, setNextMatch] = useState<Fixture>();

    const getMatch = (type: "next" | "last"): void => {
        fixtureClient
            .getFixtures(
                { team: Number(teamId), season: 2023 },
                { ttl: 1000 * 60 * 60 * 24 }
            )
            .then((res) => {
                console.log("res: ", res);
                const sorted = res.sort(
                    (a, b) =>
                        Date.parse(a.fixture.date) - Date.parse(b.fixture.date)
                );
                console.log("sorted: ", sorted);
                if (type === "next") {
                    const nextMatches = sorted.filter(
                        (match) => match.fixture.status.long === "Not Started"
                    );
                    console.log("next: ", nextMatches);
                    setNextMatch(nextMatches[0]);
                } else {
                    const lastMatches = sorted.filter(
                        (match) =>
                            match.fixture.status.long === "Match Finished"
                    );
                    console.log("last: ", lastMatches);
                    setLastMatch(lastMatches[lastMatches.length - 1]);
                }
            });
    };

    const getMatchCache = useCallback(getMatch, [teamId]);

    useEffect(() => {
        teamClient
            .getTeamById(Number(teamId), { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setTeam(res));
        leagueClient
            .getLeagues({ team: Number(teamId) }, { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setLeagues(res));

        getMatchCache("next");
        getMatchCache("last");
    }, [teamId, getMatchCache]);

    return (
        <>
            {team && (
                <div className="space-y-14">
                    <Header
                        name={team.team.name}
                        logo={team.team.logo}
                        background={team.venue.image}
                    />
                    <div className="flex flex-row space-x-10">
                        <div className="space-y-4">
                            <p className="text-white font-bold text-xl">
                                Último resultado
                            </p>
                            <div className="cursor-pointer space-y-1">
                                {lastMatch && <MatchCard fixture={lastMatch} />}
                                <div className="bg-base-content rounded-md text-white p-2">
                                    <div className="flex space-x-2 text-xs items-center">
                                        <img
                                            src={lastMatch?.league.logo}
                                            className="w-5 h-5"
                                        />
                                        <p>{lastMatch?.league.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 ">
                            <p className="text-white font-bold text-xl">
                                Siguiente partido
                            </p>
                            <div className="space-y-1 cursor-pointer">
                                {nextMatch && <MatchCard fixture={nextMatch} />}
                                <div className="bg-base-content rounded-md text-white p-2">
                                    <div className="flex space-x-2 text-xs items-center">
                                        <img
                                            src={nextMatch?.league.logo}
                                            className="w-5 h-5"
                                        />
                                        <p>{nextMatch?.league.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-xl">
                            Clasificaciones
                        </p>
                        {leagues && (
                            <Select
                                options={leagues.map(
                                    (league) => league.league.name
                                )}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default TeamPage;
