export default function Graphdet(props) {
    return (
        <>
            <div className="graph-items">
                <div className="graph-color" style={{background: props.color}}/>
                <div className="graph-color-item">
                    <p className="graph-color-item-heading">{props.item}:</p>
                </div>
                <div className="graph-color-value">
                    <p className="graph-color-value-heading">{props.value}</p>
                </div>
            </div>
        </>
    )
}