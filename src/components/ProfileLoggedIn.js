import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProfileLoggedIn(props) {
    return (
        <>
            <div className="signedInTrue my-3">
                <div
                    className="container d-flex mt-5 mb-0 justify-content-center"
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#e6f3ff" : "#474b52",
                    }}
                >
                    <div className="col my-5 d-flex justify-content-center">
                        <Image
                            src={props.profileImg}
                            roundedCircle
                            className=""
                        />
                    </div>
                    <div className="col my-3 d-flex align-items-center justify-content-start">
                        <div
                            className={`quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            <h2>Name: {props.userName}</h2>
                            <br />
                            <h4>Contact: {props.userContact}</h4>
                            <br />
                            <h4>Email: {props.userEmail}</h4>
                        </div>
                    </div>
                </div>
                <div
                    className="container d-flex mt-0 justify-content-center"
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#e6f3ff" : "#474b52",
                    }}
                >
                    <div className="col my-5 d-flex justify-content-center">
                        <Button
                            variant="success"
                            className="btn-sm quicksand-medium-500"
                        >
                            Update Profile
                        </Button>
                    </div>
                    <div className="col my-3 d-flex align-items-center justify-content-start">
                        <div
                            className={`quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            <h4
                                className={`quicksand-medium-500 text-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                            >
                                Address: Ramrao Adik Institue of Technology, DY
                                Patil Deemed to be University, Nerul, Navi
                                Mumbai, Maharashtra, 400706
                            </h4>
                        </div>
                    </div>
                </div>
                <div
                    className="container d-flex py-3 justify-content-center"
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#e6f3ff" : "#474b52",
                    }}
                >
                    <br />
                </div>
                <div
                    className="container d-flex mt-0 mb-5 justify-content-center"
                    style={{
                        backgroundColor:
                            props.mode === "light" ? "#e6f3ff" : "#474b52",
                    }}
                >
                    <div className="d-grid gap-4 col-6 mb-5 justify-content-center">
                        <Button
                            variant={
                                props.mode === "dark" ? "light" : "primary"
                            }
                            className="btn-lg quicksand-medium-500"
                        >
                            Account Settings
                        </Button>
                        <Button
                            variant={
                                props.mode === "dark" ? "light" : "primary"
                            }
                            className="btn-lg quicksand-medium-500"
                        >
                            Notification
                        </Button>
                        <Button
                            variant={
                                props.mode === "dark" ? "light" : "primary"
                            }
                            className="btn-lg quicksand-medium-500"
                        >
                            Security
                        </Button>
                        <Button
                            variant={
                                props.mode === "dark" ? "light" : "primary"
                            }
                            className="btn-lg quicksand-medium-500"
                        >
                            Your Orders
                        </Button>
                        <Button
                            variant={
                                props.mode === "dark" ? "light" : "primary"
                            }
                            className="btn-lg quicksand-medium-500"
                        >
                            More
                        </Button>
                        <Link
                            to="/login"
                            className="btn btn-lg btn-danger my-5 quicksand-medium-500"
                        >
                            Sign Out
                        </Link>
                    </div>
                    <div className="col my-3 d-flex align-items-center justify-content-center">
                        <h2 className="quicksand-medium-500">
                            <span
                                className={`badge text-dark bg-${
                                    props.mode === "dark" ? "warning" : "info"
                                }`}
                            >
                                {props.userBadge}
                            </span>
                        </h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileLoggedIn;
