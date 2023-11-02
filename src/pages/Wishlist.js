import React from "react";

function Wishlist(props) {
    return (
        <>
            <div className="d-flex quicksand-medium-500 my-5 justify-content-center">
                <h1
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Wishlist
                </h1>
            </div>
        </>
    );
}

export default Wishlist;
