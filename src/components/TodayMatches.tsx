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
    }, [fecha]);

    if (!todayMatches) return <>loading...</>;

    return (
        <div>
            {Object.entries(todayMatches).map(([, { league, matches }]) => {
                return (
                    <div className="pt-6">
                        <div className="flex flex-row items-center space-x-4">
                            <div className="flex items-center justify-center rounded-full h-11 w-11 bg-white  hover:outline-black hover:scale-105 hover:outline cursor-pointer">
                                <img
                                    src={league.logo}
                                    alt="league logo"
                                    className="p-1 h-12 w-auto"
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

export default TodayMatches;
