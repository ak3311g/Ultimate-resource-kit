import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../../images/logo.png";
import { faHome, faRightFromBracket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper, faNoteSticky, faUser, faBell } from "@fortawesome/free-regular-svg-icons";

export default function Nav() {
    return (
        <>
            <div className="navbar d-flex flex-column ">
                <div className="d-flex flex-column">
                    <div className="logo my-3 mx-2">
                        <img src={img} alt="logo" />
                        <FontAwesomeIcon className="opacity-50" icon={faSearch} />
                    </div>
                    <div className="nav-items d-flex flex-column my-3 mx-2">
                        <FontAwesomeIcon className="selected my-2 opacity-50" icon={faHome} />
                        <FontAwesomeIcon className="selected my-2 opacity-50" icon={faNewspaper} />
                        <FontAwesomeIcon className="selected my-2 opacity-50" icon={faNoteSticky} />
                        <FontAwesomeIcon className="selected my-2 opacity-50" icon={faUser} />
                    </div>
                </div>
                <div className="bottom d-flex flex-column">
                    <FontAwesomeIcon className="selected my-2 opacity-50" icon={faBell} />
                    <FontAwesomeIcon className="selected my-2 opacity-50" icon={faRightFromBracket} />
                </div>
            </div>

            <div className="navbar-mobile">
                <FontAwesomeIcon className="selected my-2 opacity-50" icon={faHome} />
                <FontAwesomeIcon className="selected my-2 opacity-50" icon={faNewspaper} />
                <FontAwesomeIcon className="selected my-2 opacity-50" icon={faNoteSticky} />
                <FontAwesomeIcon className="selected my-2 opacity-50" icon={faUser} />
                <FontAwesomeIcon className="opacity-50" icon={faSearch} />
            </div>
        </>
    )
}