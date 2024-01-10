import { fixtureClient } from "../../api";
import { Fixture } from "api-football-beta-ts-test";

export type MatchesByLeagueRound = {
    [key: string]: {
        round: string;
        matches: Fixture[];
    };
};

function getFixtures(season: number, compId: number) {
    return fixtureClient.getFixtures(
        { league: Number(compId), season: season },
        { ttl: 1000 * 60 * 60 * 24 }
    );
}

export const getMatches = (
    type: "next" | "last",
    compId: number
): Promise<MatchesByLeagueRound> => {
    return Promise.all([getFixtures(2023, compId), getFixtures(2024, compId)])
        .then((res) => [...res[0], ...res[1]])
        .then((res) => {
            let matches: Fixture[] = [];
            const sorted = res.sort(
                (a, b) =>
                    Date.parse(a.fixture.date) - Date.parse(b.fixture.date)
            );
            if (type === "next") {
                matches = sorted.filter(
                    (match) => match.fixture.status.long === "Not Started"
                );
            } else {
                matches = sorted
                    .filter(
                        (match) =>
                            match.fixture.status.long === "Match Finished"
                    )
                    .reverse();
            }

            const matchesByLeagueRound = matches?.reduce((acc, match) => {
                acc[match.league.round]?.matches.push(match) ||
                    (acc[match.league.round] = {
                        round: match.league.round,
                        matches: [match],
                    });
                return acc;
            }, {} as MatchesByLeagueRound);

            return matchesByLeagueRound;
        });
};
