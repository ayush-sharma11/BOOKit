import React from "react";

function SignUp(props) {
    return (
        <>
            <div className="d-flex quicksand-medium-500 my-3 justify-content-center">
                <h1
                    className={`text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Terms and Conditions
                </h1>
            </div>
        </>
    );
}

export default SignUp;
