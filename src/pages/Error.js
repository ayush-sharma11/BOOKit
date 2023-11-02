import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
    props.mode === "dark"
        ? (document.body.style.backgroundColor = "#36393e")
        : (document.body.style.backgroundColor = "white");
    return (
        <>
            <div className="d-flex my-3 justify-content-center">
                <h1
                    className={`quicksand-medium-500 my-5 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Error 404! Can't find the page.
                </h1>
            </div>
            <div className="d-flex my-3 justify-content-center">
                <h3
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Go to the{" "}
                    <Link
                        className={`text-decoration-none text-${
                            props.mode === "dark" ? "danger" : "primary"
                        }`}
                        to="/home"
                    >
                        Homepage
                    </Link>
                </h3>
            </div>
            <br />
            <br />
        </>
    );
}

export default Error;
