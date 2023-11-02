import React from "react";
import { Link } from "react-router-dom";

function LowerDisplay(props) {
    return (
        <>
            <h1
                className={`text-center quicksand-medium-500 my-4 text-${
                    props.mode === "dark" ? "light" : "dark"
                }`}
            >
                Now Trending Books
            </h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(1).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 1
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(2).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 2
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(3).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 3
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(4).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 4
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(5).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 5
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(6).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 6
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(7).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 7
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(8).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 8
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(9).webp"
                            className="card-img-top"
                            alt="example book"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500">
                                Example Book 9
                            </h5>
                            <Link
                                to="/best-sellers"
                                className={`btn quicksand-medium-500 btn-sm d-inline float-end btn-outline-${
                                    props.mode === "dark" ? "light" : "dark"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark" ? "#4d4d4d" : "",
                                }}
                                type="submit"
                            >
                                Explore
                            </Link>
                            <p className="card-text quicksand-medium-500">
                                This is an example of a trending book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LowerDisplay;
