import { useEffect, useState } from "react";
import { EQUIPOS } from "../../map";
import { teamClient } from "../../api";
import { Team } from "api-football-beta-ts-test";
import Dropdown from "../Dropdown";

function NavTeams({
    open,
    setOpen,
    setClose,
}: {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;
}) {
    const [teams, setTeams] = useState<Team[]>([]);

    useEffect(() => {
        Promise.all(
            Object.entries(EQUIPOS).map(([, id]) =>
                teamClient.getTeamById(id, { ttl: 1000 * 60 * 60 * 24 })
            )
        ).then(setTeams);
    }, []);
    return (
        <>
            <Dropdown
                items={teams.map((team) => ({
                    name: team.team.name,
                    logo: team.team.logo,
                    link: `team/${team.team.id.toString()}`,
                }))}
                label="Teams"
                title="Equipos más seguidos en tu país"
                open={open}
                handleClose={setClose}
                handleOpen={setOpen}
            />
        </>
    );
}

export default NavTeams;
