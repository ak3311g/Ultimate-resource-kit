import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./profile.css";


export default function Button() {
    return(
        <>
            <div className="button-block ">
                <button className="button border-0">I want to <FontAwesomeIcon icon={faCaretDown} /> </button>
            </div>
        </>
    )
}