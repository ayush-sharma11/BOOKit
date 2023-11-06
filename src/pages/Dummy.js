import React from "react";

function Dummy(props) {
    return (
        <>
            <div
                className={`container d-flex my-5 quicksand-medium-500 text-${
                    props.mode === "dark" ? "light" : "dark"
                }`}
            >
                <h1>Dummy Page</h1>
            </div>
            <div
                className={`container d-flex my-5 quicksand-medium-500 justify-content-center text-${
                    props.mode === "dark" ? "light" : "dark"
                }`}
            >
                <h1>React and Express Connection</h1>
                <ul>
                    {props.data.map((item) => (
                        <li key={item._id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Dummy;
