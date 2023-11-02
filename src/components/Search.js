import React from "react";

function Search(props) {
    return (
        <>
            <div>
                <div
                    className={`form-check d-flex justify-content-end mx-2 form-switch text-${
                        props.mode === "light" ? "dark" : "light"
                    }`}
                ></div>
                <div className="container">
                    <form
                        className="d-flex justify-content-center"
                        role="search"
                    >
                        <input
                            className={`form-control quicksand-medium-500 w-50 me-2 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            style={{
                                backgroundColor:
                                    props.mode === "dark" ? "#4d4d4d" : "white",
                                WebkitTextFillColor:
                                    props.mode === "dark" ? "#BEBEBE" : "black",
                            }}
                            type="search"
                            placeholder="Search by Title, Author, Publisher or ISBN"
                            aria-label="Search"
                        />

                        <button
                            className={`btn btn-outline-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                            style={{
                                backgroundColor:
                                    props.mode === "dark" ? "#4d4d4d" : "white",
                            }}
                            type="submit"
                        >
                            <i
                                className={`bi bi-search text-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                            ></i>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Search;
