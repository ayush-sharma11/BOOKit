import React, { useState } from "react";

import { Link } from "react-router-dom";

function ProfileLogin(props) {
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
                    Login
                </h2>
                <form
                    className="row my-3"
                    style={{
                        position: "relative",
                        margin: "auto",
                        width: "40%",
                    }}
                >
                    <div
                        className="mb-3"
                        style={{ width: "75%", margin: "auto" }}
                    >
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

                    <div
                        className="password-form"
                        style={{ width: "75%", margin: "auto" }}
                    >
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
                                    props.mode === "dark" ? "light" : "primary"
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

                    <div
                        className="mb-3 my-3 me-0 d-flex form-check"
                        style={{ marginLeft: "5rem", width: "75%" }}
                    >
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
                        />
                        <label
                            className={`form-check-label mx-2 quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            htmlFor="exampleCheck1"
                        >
                            Remember me
                        </label>
                    </div>
                    <div className="buffer">
                        <br />
                    </div>
                    <Link
                        to="/profile"
                        style={{
                            width: "auto",
                            marginLeft: "5.75rem",
                        }}
                        className={`btn ml-auto btn-${
                            props.mode === "dark" ? "light" : "primary"
                        } quicksand-medium-500`}
                    >
                        Login
                    </Link>
                    <div className="container d-flex justify-content-center my-5">
                        <Link
                            to="/create-account"
                            style={{
                                width: "auto",
                            }}
                            className={`btn ml-auto btn-${
                                props.mode === "dark" ? "light" : "primary"
                            } quicksand-medium-500`}
                        >
                            Don't have an account?
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ProfileLogin;
