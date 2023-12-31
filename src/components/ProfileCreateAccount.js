import React, { useState } from "react";
import { Link } from "react-router-dom";

function ProfileCreateAccount(props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);
    const toggleIsPasswordVisible = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const [acceptTerms, setAcceptTerms] = useState(false);
    const toggleAccpetTerms = () => {
        setAcceptTerms(!acceptTerms);
    };

    return (
        <>
            <div className="container">
                <h2
                    className={`quicksand-medium-500 mt-5 text-center text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Create Account
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
                                Name
                            </label>
                            <input
                                type="text"
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

                        <div className="mb-3 w-100">
                            <label
                                htmlFor="exampleInputEmail1"
                                className={`form-label text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } quicksand-medium-500`}
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
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

                        <div className="mb-3 w-100">
                            <label
                                htmlFor="exampleInputEmail1"
                                className={`form-label text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } quicksand-medium-500`}
                            >
                                Address
                            </label>
                            <textarea
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
                                    minHeight: "5rem",
                                    maxHeight: "8rem",
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
                                Create Password
                            </label>
                            <div className="mb-3 input-group">
                                <input
                                    type={
                                        isPasswordVisible ? "password" : "text"
                                    }
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
                                    onClick={() => toggleIsPasswordVisible()}
                                >
                                    <i
                                        className={`bi bi-eye${
                                            isPasswordVisible ? "-slash" : ""
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
                                    onChange={toggleAccpetTerms}
                                />
                                <label
                                    className={`form-check-label quicksand-medium-500 col text-${
                                        props.mode === "dark" ? "light" : "dark"
                                    }`}
                                    htmlFor="exampleCheck1"
                                >
                                    I (have read and hereby) accept the terms &
                                    conditions
                                </label>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mt-5">
                            <Link
                                to="/profile"
                                className={`btn btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                } quicksand-medium-500 ${
                                    acceptTerms ? "" : "disabled"
                                }`}
                            >
                                Sign Up
                            </Link>
                        </div>

                        <div className="container d-flex justify-content-center my-5">
                            <Link
                                to="/login"
                                className={`btn ml-auto btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                } quicksand-medium-500`}
                            >
                                Already have an account?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ProfileCreateAccount;
