import {
    FixtureClient,
    LeagueClient,
    TeamClient,
} from "api-football-beta-ts-test";

export const leagueClient = new LeagueClient({
    rapid_api_key: import.meta.env.VITE_RAPID_API_KEY || "",
});

export const teamClient = new TeamClient({
    rapid_api_key: import.meta.env.VITE_RAPID_API_KEY || "",
});

export const fixtureClient = new FixtureClient({
    rapid_api_key: import.meta.env.VITE_RAPID_API_KEY || "",
});
