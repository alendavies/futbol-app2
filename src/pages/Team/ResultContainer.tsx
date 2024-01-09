import { ReactNode } from "react";

function ResultContainer({
    isWinner,
    children,
}: {
    isWinner: boolean;
    children: ReactNode;
}) {
    return (
        <>
            {isWinner ? (
                <>
                    <p className="text-black bg-success rounded-md px-1 font-bold text-sm self-center absolute">
                        VICTORIA
                    </p>
                    <div className="border border-success rounded-md">
                        {children}
                    </div>
                </>
            ) : (
                <>
                    <p className="text-black bg-error rounded-md px-1 font-bold text-sm self-center absolute">
                        DERROTA
                    </p>
                    <div className="border border-error rounded-md">
                        {children}
                    </div>
                </>
            )}
        </>
    );
}

export default ResultContainer;
