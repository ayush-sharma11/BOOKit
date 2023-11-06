import React from "react";

function BoxSets(props) {
    return (
        <>
            <div className="container my-5">
                <h1
                    className={`my-5 quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Box Sets
                </h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(14).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(17).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(18).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className={`card h-100 text-bg-${props.mode}`}>
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp"
                                className="card-img-top"
                                alt="..."
                            />
                            <div className="card-body">
                                <h5 className="card-title quicksand-medium-500">
                                    Box Set
                                </h5>
                                <p className="card-text quicksand-medium-500">
                                    This is a box set example
                                </p>
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i class="bi bi-eye-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </button>{" "}
                                <button
                                    type="button"
                                    className={`btn btn-${
                                        props.mode === "dark"
                                            ? "light"
                                            : "primary"
                                    }`}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoxSets;
