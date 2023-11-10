import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileCreateAccount(props) {
    const [acceptTerms, setAcceptTerms] = useState(false);

    const toggleAcceptTerms = () => {
        if (acceptTerms === true) {
            console.log(acceptTerms);
        } else {
            setAcceptTerms(true);
        }
    };

    const [viewPassword, setViewPassword] = useState(true);

    const toggleViewPassword = () => {
        setViewPassword(!viewPassword);
    };

    return (
        <>
            <div className="my-5">
                <h2
                    className={`quicksand-medium-500 text-center text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    New to BOOKit? Sign Up now!
                </h2>
                <form
                    className="row my-5"
                    style={{
                        position: "relative",
                        margin: "auto",
                        width: "40%",
                    }}
                >
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className={`form-label text-${
                                props.mode === "dark" ? "light" : "dark"
                            } quicksand-medium-500`}
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            className={`form-control text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            style={{
                                backgroundColor:
                                    props.mode === "dark" ? "#4d4d4d" : "white",
                                WebkitTextFillColor:
                                    props.mode === "dark" ? "#BEBEBE" : "black",
                            }}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />

                        <div
                            id="emailHelp"
                            className={`form-text quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        ></div>
                    </div>
                    <div className="password-form">
                        <label
                            htmlFor="exampleInputPassword1"
                            className={`form-label quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            Password
                        </label>
                        <div className="mb-3 input-group">
                            <input
                                type={viewPassword ? "password" : "text"}
                                className="form-control"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                id="exampleInputPassword1"
                            />
                            <button
                                type="button"
                                className={`btn btn-${
                                    props.mode === "dark" ? "dark" : "primary"
                                } border-${
                                    props.mode === "dark"
                                        ? "light"
                                        : "secondary"
                                }`}
                                onClick={() => toggleViewPassword()}
                            >
                                <i
                                    className={`bi bi-eye${
                                        viewPassword ? "-slash" : ""
                                    }`}
                                    style={{
                                        color: "white",
                                    }}
                                ></i>
                            </button>
                        </div>
                    </div>
                    <div className="mb-3 my-3 d-flex form-check">
                        <input
                            type="checkbox"
                            className="form-check-input pl-5"
                            style={{
                                marginLeft: "-0.75rem",
                                backgroundColor:
                                    props.mode === "dark" ? "#4d4d4d" : "white",
                                WebkitTextFillColor:
                                    props.mode === "dark" ? "#BEBEBE" : "black",
                            }}
                            id="exampleCheck1"
                            onChange={() => toggleAcceptTerms()}
                        />
                        <label
                            style={{ marginRight: "auto" }}
                            className={`form-check-label mx-2 quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            htmlFor="exampleCheck1"
                        >
                            Accept Terms & Conditions
                        </label>
                    </div>
                    <Link
                        to="/profile"
                        style={{
                            width: "auto",
                            marginLeft: "0.70rem",
                        }}
                        className={`btn ${
                            acceptTerms === false ? "disabled-link" : ""
                        } my-3 ml-auto btn-${
                            props.mode === "dark" ? "light" : "primary"
                        } quicksand-medium-500`}
                    >
                        Create Account
                    </Link>
                </form>
            </div>
        </>
    );
}

export default ProfileCreateAccount;
