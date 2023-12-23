import "./App.css";
import { LeagueClient } from "api-football-beta-ts-test";
function App() {
    const api = new LeagueClient();
    const league = api.getLeagueById(39).then((res) => {
        console.log(res);
    });

    return <></>;
}

export default App;
