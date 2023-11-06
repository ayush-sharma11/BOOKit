import React from "react";
import { Link } from "react-router-dom";

function TopCategoriesCards(props) {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(14).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[0]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Fiction Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(16).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[1]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Non Fiction Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(17).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[2]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Biography Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(18).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[3]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Self Help Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[4]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Education Category
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className={`card h-100 text-bg-${props.mode}`}>
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(20).webp"
                            className="card-img-top"
                            alt="Explore Button"
                        />
                        <div className="card-body">
                            <h5 className="card-title quicksand-medium-500 d-inline">
                                {props.topGenres[5]}
                            </h5>
                            <Link
                                to="/categories"
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
                                Finance Category
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopCategoriesCards;
