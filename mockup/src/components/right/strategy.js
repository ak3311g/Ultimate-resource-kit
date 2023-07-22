import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./right.css";
import Scroll from "./scroll";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Strategy() {
    return (
        <>
            <div className="container strategy-block">
                <div className="strategy-block-bg">
                    <p className="heading">Retirement Strategy</p>
                    <Scroll heading="Employee Contribution" />
                    <Scroll heading="Retirement Age" />
                    <hr />
                    <div className="info-block">
                        <div className="details">
                            <p className="info">Employer Contribution</p>
                            <p className="info">8.4%</p>
                        </div>
                        <div className="details">
                            <p className="info">Interest Rate</p>
                            <p className="info">5%</p>
                        </div>
                    </div>
                    <div className="strategy-button d-flex flex-column">
                        <button>Update</button>
                        <a href="/" className="text-decoration-none">View Help Docs<FontAwesomeIcon icon={faCaretRight} /> </a>
                    </div>
                </div>
                <div className="extra-details">
                    <p className="m-0 normal">Are you considering a</p>
                    <p className="mb-1 bolder">Housing Advance?</p>
                    <p className="light">Limited time reduced interest</p>
                    <a href="/" className="blue text-decoration-none m-0">Learn More<FontAwesomeIcon icon={faCaretRight} /> </a>
                </div>
            </div>
        </>
    )
}