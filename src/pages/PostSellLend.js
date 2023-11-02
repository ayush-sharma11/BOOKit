import React from "react";
import { Link } from "react-router-dom";

function PostSellLend(props) {
    return (
        <>
            <div className="d-flex container quicksand-medium-500 my-5 justify-content-center">
                <h1
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Congratulations! Your book has been successfully apllied!
                </h1>
            </div>
            <div className="container d-flex justify-content-center my-5">
                <Link
                    to="/home"
                    className={`btn quicksand-medium-500 my-3 mx-3 btn-${
                        props.mode === "dark" ? "light" : "primary"
                    }`}
                >
                    Go to Home
                </Link>
                <Link
                    to="/sell-lend"
                    className={`btn quicksand-medium-500 my-3 mx-3 btn-${
                        props.mode === "dark" ? "light" : "primary"
                    }`}
                >
                    Sell/Lend again
                </Link>
            </div>
            <div className="container mt-5 mb-2">
                <br />
            </div>
            <div className="container mb-5 d-grid g-5 justify-content-center">
                <div className="">
                    <h3
                        className={`quicksand-medium-500 text-${
                            props.mode === "dark" ? "light" : "dark"
                        }`}
                    >
                        Rate the process
                    </h3>
                </div>
                <div className="rating" style={{ margin: "auto" }}>
                    <input value="5" name="rating" id="star5" type="radio" />
                    <label for="star5"></label>
                    <input value="4" name="rating" id="star4" type="radio" />
                    <label for="star4"></label>
                    <input value="3" name="rating" id="star3" type="radio" />
                    <label for="star3"></label>
                    <input value="2" name="rating" id="star2" type="radio" />
                    <label for="star2"></label>
                    <input value="1" name="rating" id="star1" type="radio" />
                    <label for="star1"></label>
                </div>
            </div>
        </>
    );
}

export default PostSellLend;
