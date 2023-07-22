export default function Goaldetblock(props) {
    return (
        <>
            <div className="goal-block-amount-card">
                <div className="card-content">
                    <p className="goal-block-amount">{props.value}</p>
                    <p className="goal-block-amount-subheading">{props.substate}</p>
                </div>
                <div className="hr" />
            </div>
        </>
    )
}