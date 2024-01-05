import { useEffect, useState } from "react";
import { fixtureClient } from "../api";
import { Fixture } from "api-football-beta-ts-test";
import MatchCard from "./MatchCard";
import { countriesFilter, leaguesFilter } from "../filters";

type MatchesByLeague = {
    [key: string]: {
        league: {
            name: string;
            logo: string;
            round: string;
        };
        matches: Fixture[];
    };
};

// Filtrar las ligas que pertenecen al array "leagues"
const filterByLeague = (fixture: Fixture[]) => {
    const filteredFixtures = fixture.filter((fixture) =>
        leaguesFilter.includes(fixture.league.name)
    );
    return filteredFixtures;
};

const filterByCountry = (fixture: Fixture[]) => {
    const filteredFixtures = fixture.filter((fixture) =>
        countriesFilter.includes(fixture.league.country)
    );
    return filteredFixtures;
};

function TodayMatches() {
    const [todayMatches, setTodayMatches] = useState<MatchesByLeague>();
    const fecha = new Date().toISOString().slice(0, 10);

    useEffect(() => {
        fixtureClient
            .getFixtures(
                {
                    date: fecha,
                },
                { ttl: 1000 * 60 * 60 * 24 }
            )
            .then((response) => {
                const filteredFixturesByCountries = filterByCountry(response);
                const filteredFixturesByLeague = filterByLeague(
                    filteredFixturesByCountries
                );
                const acc = filteredFixturesByLeague.reduce((acc, fixture) => {
                    acc[fixture.league.name]?.matches.push(fixture) ||
                        (acc[fixture.league.name] = {
                            league: {
                                name: fixture.league.name,
                                logo: fixture.league.logo,
                                round: fixture.league.round,
                            },
                            matches: [fixture],
                        });
                    return acc;
                }, {} as MatchesByLeague);
                setTodayMatches(acc);
                console.log(acc);
            });
    }, []);

    if (!todayMatches) return <>loading...</>;

    return (
        <div>
            {Object.entries(todayMatches).map(([, { league, matches }]) => {
                return (
                    <div className="pt-6">
                        <div className="flex flex-row items-center space-x-4">
                            <div className="flex items-center justify-center rounded-full w-11 h-11 bg-white">
                                <img
                                    src={league.logo}
                                    alt="league logo"
                                    className="p-1 hover:border hover:border-black"
                                />
                            </div>
                            <div>
                                <p className="text-white text-xl font-semibold">
                                    {league.name}
                                </p>
                                <p className="text-neutral-400">
                                    {league.round}
                                </p>
                            </div>
                        </div>
                        <div className="flex space-x-10 py-6">
                            {matches.map((fixture) => (
                                <MatchCard fixture={fixture} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TodayMatches;
