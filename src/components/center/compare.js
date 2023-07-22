import Comparegraph from "./comparegraph";
import Dropdown from "./dropdown";

export default function Compare() {

    return (
        <>
            <div className="compare-block">
                <div className="compare-block-heading">
                    <p className="heading">How do I compare to my peers?</p>
                    <p className="subheading">These numbers represent current goal achievement</p>
                </div>
                <div className="compare-block-graph mt-5 d-flex">
                    <div className="dropdowns">
                        <Dropdown />
                        <Dropdown />
                        <Dropdown />
                    </div>
                    <div className="compare-block-graphs d-flex">
                        <Comparegraph name="Average" value="78" />
                        <Comparegraph name="Top" value="95" />
                        <Comparegraph name="Me" value="59" />
                    </div>
                </div>
            </div>
        </>
    )
}