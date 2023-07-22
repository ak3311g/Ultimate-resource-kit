import Centerpanel from "./center/centerpanel";
import Profile from "./profile";
import Strategy from "./right/strategy";
import "./homepage.css"
import Nav from "./navbar/navbar";

export default function Homepage() {
    return (
        <>
            <div className="homepage d-flex">
                <Nav/>
                <Profile />
                <Centerpanel />
                <Strategy />
            </div>
        </>
    )
}