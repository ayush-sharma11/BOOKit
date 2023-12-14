import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileLogin(props) {
    const [viewPassword, setViewPassword] = useState(true);

    const toggleViewPassword = () => {
        setViewPassword(!viewPassword);
    };

    return (
        <>
            <div className="container">
                <h2
                    className={`quicksand-medium-500 mt-5 text-center text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Login
                </h2>
                <div className="my-5 col d-flex align-items-center">
                    <form
                        className="row my-3 mx-auto"
                        style={{
                            position: "relative",
                            width: "40%",
                        }}
                    >
                        <div className="mb-3 w-100">
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
                                className={`form-control quicksand-medium-500 text-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
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
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                        </div>

                        <div className="password-form w-100">
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
                                    className="form-control quicksand-medium-500"
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
                                        props.mode === "dark"
                                            ? "dark"
                                            : "primary"
                                    } border-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
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
                            className="container col-10 d-flex justify-content-start"
                            style={{ width: "100%" }}
                        >
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input pl-5 col-1"
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
                                    id="exampleCheck1"
                                />
                                <label
                                    className={`form-check-label quicksand-medium-500 col text-${
                                        props.mode === "dark" ? "light" : "dark"
                                    }`}
                                    htmlFor="exampleCheck1"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <Link
                                to="/profile"
                                className={`btn btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                } quicksand-medium-500`}
                            >
                                Login
                            </Link>
                        </div>

                        <div className="container d-flex justify-content-center my-5">
                            <Link
                                to="/create-account"
                                className={`btn ml-auto btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                } quicksand-medium-500`}
                            >
                                Don't have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProfileLogin;
