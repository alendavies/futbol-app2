import { useEffect } from "react";
import { fixtureClient } from "../api";

function TodayMatches() {
    useEffect(() => {
        fixtureClient.getFixtures({ date: "2023-12-26" });
    }, []);
    return <div></div>;
}

export default TodayMatches;
