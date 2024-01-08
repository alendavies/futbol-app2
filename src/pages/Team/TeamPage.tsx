import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { leagueClient, teamClient } from "../../api";
import { League, Team } from "api-football-beta-ts-test";
import { useEffect, useState } from "react";
import MatchCard from "../../components/MatchCard";
import Select from "../../components/Select";

function TeamPage() {
    const [team, setTeam] = useState<Team>();

    const { teamId } = useParams();
    const [leagues, setLeagues] = useState<League[]>();

    useEffect(() => {
        teamClient
            .getTeamById(Number(teamId), { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setTeam(res));
        leagueClient
            .getLeagues({ team: Number(teamId) }, { ttl: 1000 * 60 * 60 * 24 })
            .then((res) => setLeagues(res));
    }, [teamId]);

    return (
        <>
            {team && (
                <div className="space-y-16">
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
                                <MatchCard
                                    fixture={{
                                        fixture: {
                                            id: 0,
                                            referee: "",
                                            timezone: "",
                                            date: "",
                                            timestamp: 0,
                                            periods: {
                                                first: 0,
                                                second: 0,
                                            },
                                            venue: {
                                                id: 0,
                                                name: "",
                                                city: "",
                                            },
                                            status: {
                                                long: "",
                                                short: "",
                                                elapsed: 0,
                                            },
                                        },
                                        league: {
                                            id: 0,
                                            name: "",
                                            country: "",
                                            logo: "",
                                            flag: "",
                                            season: 0,
                                            round: "",
                                        },
                                        teams: {
                                            home: {
                                                id: 0,
                                                name: "",
                                                logo: "",
                                            },
                                            away: {
                                                id: 0,
                                                name: "",
                                                logo: "",
                                            },
                                        },
                                        goals: {
                                            home: 0,
                                            away: 0,
                                        },
                                        score: {
                                            halftime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            fulltime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            extratime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            penalty: {
                                                home: 0,
                                                away: 0,
                                            },
                                        },
                                    }}
                                />
                                <div className="bg-base-content rounded-md text-white p-2">
                                    logo liga
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 ">
                            <p className="text-white font-bold text-xl">
                                Siguiente partido
                            </p>
                            <div className="space-y-1 cursor-pointer">
                                <MatchCard
                                    fixture={{
                                        fixture: {
                                            id: 0,
                                            referee: "",
                                            timezone: "",
                                            date: "",
                                            timestamp: 0,
                                            periods: {
                                                first: 0,
                                                second: 0,
                                            },
                                            venue: {
                                                id: 0,
                                                name: "",
                                                city: "",
                                            },
                                            status: {
                                                long: "",
                                                short: "",
                                                elapsed: 0,
                                            },
                                        },
                                        league: {
                                            id: 0,
                                            name: "",
                                            country: "",
                                            logo: "",
                                            flag: "",
                                            season: 0,
                                            round: "",
                                        },
                                        teams: {
                                            home: {
                                                id: 0,
                                                name: "",
                                                logo: "",
                                            },
                                            away: {
                                                id: 0,
                                                name: "",
                                                logo: "",
                                            },
                                        },
                                        goals: {
                                            home: 0,
                                            away: 0,
                                        },
                                        score: {
                                            halftime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            fulltime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            extratime: {
                                                home: 0,
                                                away: 0,
                                            },
                                            penalty: {
                                                home: 0,
                                                away: 0,
                                            },
                                        },
                                    }}
                                />
                                <div className="bg-base-content rounded-md text-white p-2">
                                    logo liga
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-bold text-xl">
                            Clasificaciones
                        </p>
                        {/* <Select
                            options={leagues?.map(
                                (league) => league.league.name
                            )}
                        /> */}
                    </div>
                </div>
            )}
        </>
    );
}

export default TeamPage;
