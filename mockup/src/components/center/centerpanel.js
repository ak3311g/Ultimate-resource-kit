import Goalpanel from "./goalpanel";
import "./center.css";
import Graph from "./graph";
import Compare from "./compare";

export default function Centerpanel() {
    return(
        <>
            <div className="container center-panel">
                <Goalpanel />
                <Graph />
                <Compare />
            </div>
        </>
    )
}