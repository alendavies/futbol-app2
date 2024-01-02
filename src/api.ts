import {
    FixtureClient,
    LeagueClient,
    TeamClient,
} from "api-football-beta-ts-test";

//const RAPID_API_KEY = "25c3ee98f1mshae3c4ea18b2d00bp150122jsn0be47bfd38d5"; mi key

const RAPID_API_KEY = "2f55e7c504msh7c108d43c1ec05ep17c3b5jsned8a66db5887"; //LUCA KEY

export const leagueClient = new LeagueClient({
    rapid_api_key: RAPID_API_KEY || "",
});

export const teamClient = new TeamClient({
    rapid_api_key: RAPID_API_KEY || "",
});

export const fixtureClient = new FixtureClient({
    rapid_api_key: RAPID_API_KEY || "",
});
