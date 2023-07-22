import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IMG from "../images/profile.png";
import Button from "./button";
import "./profile.css";
import Transaction from "./transaction";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Profile() {
    return (
        <>
            <div className="profile-block">
            <div className="notification d-flex w-100"><FontAwesomeIcon icon={faBell}/> </div>
                <div className="profile-details d-flex">
                    <div className="profile-img">
                        <img src={IMG} alt="profile" />
                    </div>
                    <div className="name">
                        <h2>Hi John Doe,</h2>
                        <p>welcome back</p>
                    </div>
                </div>
                <div className="profile-content">
                        <div className="profile-content-details">
                            <div className="profile-content-fixed my-3">
                                <p className="m-0 fw-bold upper">Today</p>
                                <p className="fw-bold fs-2 m-0 middle">$19,892</p>
                                <p className="m-0 grey lower">Account Balance</p>
                            </div>
                            <div className="profile-content-modify my-3">
                                <div className="modify-first my-3">
                                    <p className="fw-bold m-0 upper">$4000</p>
                                    <span className="m-0 grey d-flex lower">Year to Date<p className="visible mx-1">Contribution </p></span>
                                </div>
                                <div className="modify-second my-3">
                                    <p className="fw-bold m-0 upper">$1892</p>
                                    <p className="m-0 grey lower">Total Interest</p>
                                </div>
                            </div>
                            <Button />
                        </div>
                        <div className="profile-transactions mt-5 ">
                            <h1>Recent Transactions</h1>
                            <Transaction />
                            <Transaction />
                            <Transaction />
                        </div>
                    </div>
                </div>
        </>
    )
}