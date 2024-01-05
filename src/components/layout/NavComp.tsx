import { useEffect, useState } from "react";
import { LIGAS } from "../../map";
import { leagueClient } from "../../api";
import { League } from "api-football-beta-ts-test";
import Dropdown from "../Dropdown";

function NavComp({
    open,
    setOpen,
    setClose,
}: {
    open: boolean;
    setOpen: () => void;
    setClose: () => void;
}) {
    const [comp, setComp] = useState<League[]>([]);
    useEffect(() => {
        Promise.all(
            Object.entries(LIGAS).map(([, id]) =>
                leagueClient.getLeagueById(id, { ttl: 1000 * 60 * 60 * 24 })
            )
        ).then(setComp);
    }, []);
    return (
        <>
            <Dropdown
                items={comp.map((comp) => ({
                    name: comp.league.name,
                    logo: comp.league.logo,
                    link: comp.league.id.toString(),
                }))}
                label="Competitions"
                title="Competiciones populares"
                open={open}
                handleClose={setClose}
                handleOpen={setOpen}
            />
        </>
    );
}

export default NavComp;
