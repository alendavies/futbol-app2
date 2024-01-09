import ResultContainer from "./ResultContainer";

interface LastResultsProps {
    homeLogo: string;
    awayLogo: string;
    homeScore: number;
    awayScore: number;
    date: string;
}

const formatDate = (date: string) => {
    return new Intl.DateTimeFormat("es-ES", {
        year: "2-digit",
        month: "numeric",
        day: "numeric",
    }).format(new Date(date));
};

function isWinner(homeScore: number, awayScore: number): boolean {
    return homeScore > awayScore;
}

function LastResults(props: LastResultsProps) {
    const { homeLogo, awayLogo, homeScore, awayScore, date } = props;
    return (
        <div className="flex flex-col text-white space-y-2">
            <ResultContainer isWinner={isWinner(homeScore, awayScore)}>
                <div className="flex flex-col grow items-center justify-center text-white space-y-4 px-10 py-4">
                    <div className="flex flex-row space-x-5 font-bold justify-center">
                        <p>{homeScore}</p>
                        <p>-</p>
                        <p>{awayScore}</p>
                    </div>
                    <div className="flex flex-row w-7 h-7 space-x-6 justify-center">
                        <img src={homeLogo} alt="home logo" />
                        <img src={awayLogo} alt="away logo" />
                    </div>
                </div>
            </ResultContainer>
            <p className="text-sm self-center">{formatDate(date)}</p>
        </div>
    );
}

export default LastResults;
