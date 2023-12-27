import { useEffect, useState } from "react";
import { fixtureClient } from "../api";
import { Fixture } from "api-football-beta-ts-test";
import MatchCard from "./MatchCard";
import { countriesFilter, leaguesFilter } from "../filters";

function TodayMatches() {
    const [todayMatches, setTodayMatches] = useState<Fixture[]>([]);

    const groupByLeague = (fixture: Fixture[]) => {
        const grouped: { [key: string]: Fixture[] } = {};
        fixture.forEach((fixture) => {
            if (grouped[fixture.league.name]) {
                grouped[fixture.league.name].push(fixture);
            } else {
                grouped[fixture.league.name] = [fixture];
            }
        });
        return grouped;
    };

    useEffect(() => {
        fixtureClient
            .getFixtures({
                date: "2023-12-26",
            })
            .then((response) => {
                setTodayMatches(response);
            });
    }, []);

    const filterByCountry = (fixture: Fixture[]) => {
        const filteredFixtures = fixture.filter((fixture) =>
            countriesFilter.includes(fixture.league.country)
        );
        return filteredFixtures;
    };

    // Filtrar las ligas que pertenecen al array "leagues"
    const filterByLeague = (fixture: Fixture[]) => {
        const filteredFixtures = fixture.filter((fixture) =>
            leaguesFilter.includes(fixture.league.name)
        );
        return filteredFixtures;
    };

    const filteredFixturesByCountries = filterByCountry(todayMatches);
    const filteredFixturesByLeague = filterByLeague(
        filteredFixturesByCountries
    );
    const groupedFixtures = groupByLeague(filteredFixturesByLeague);

    return (
        <div className="flex mt-6">
            <div className="grid grid-cols-12">
                {Object.values(groupedFixtures).map((league) =>
                    league.map((fixture) => (
                        <div className="col-span-4">
                            <div className="flex flex-row items-center space-x-4">
                                <img
                                    src={fixture.league.logo}
                                    alt="league logo"
                                    className="w-11 h-11 rounded-full"
                                />
                                <div>
                                    <p className="text-white text-xl font-semibold">
                                        {fixture.league.name}
                                    </p>
                                    <p className="text-white">
                                        {fixture.league.round}
                                    </p>
                                </div>
                            </div>
                            <MatchCard fixture={fixture} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TodayMatches;
