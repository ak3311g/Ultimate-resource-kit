import Goaldetblock from "./goaldetblock";

export default function Goalpanel() {
    return (
        <>
            <div className="goal-block">
                <div className="goal-block-fixed">
                    <p className="goal-block-heading">Retirement Income</p>
                    <h2 className="goal-block-year">Starting Year 2056</h2>
                </div>
                <div className="goal-block-amount-block d-flex">
                            <Goaldetblock substate={"My Goal"} value={"$300000"}/>
                    <div className="goal-block-modify d-flex">
                            <Goaldetblock substate={"Goal Achieved"} value={"59%"}/>
                            <Goaldetblock substate={"Est. Monthly Income"} value={"$300"}/>
                    </div>
                </div>
            </div>
        </>
    )
}