export default function Dropdown(props) {
    return (
        <>
            <div className="compare-block-graph-item d-flex align-items-center">
                <label className="dropdown-label">Age: </label>
                <select className="dropdown-options">
                    <option className="dropdown-value" value="Under 30">Under 30</option>
                    <option className="dropdown-value" value="Above 30">Above 30</option>
                </select>
            </div>
            <hr/>
        </>
    )
}