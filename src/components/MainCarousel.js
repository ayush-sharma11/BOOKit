import React from "react";

function MainCarousel() {
    return (
        <>
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner rounded-3">
                    <div className="carousel-item main-carousel-item active">
                        <img
                            src="/images/maincarousel/cashback.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                    <div className="carousel-item main-carousel-item">
                        <img
                            src="/images/maincarousel/categories.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                    <div className="carousel-item main-carousel-item">
                        <img
                            src="/images/maincarousel/sale.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                    <div className="carousel-item main-carousel-item">
                        <img
                            src="/images/maincarousel/trending.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                    <div className="carousel-item main-carousel-item">
                        <img
                            src="/images/maincarousel/range.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                    <div className="carousel-item main-carousel-item">
                        <img
                            src="/images/maincarousel/lendrent.png"
                            className="d-block w-100"
                            alt="carousel item"
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default MainCarousel;
