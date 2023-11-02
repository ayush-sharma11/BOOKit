import React from "react";

function LowerCarousel() {
    return (
        <>
            <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/202309072260.webp"
                            className="d-block w-100 h-50"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023082897764.jpg"
                            className="d-block w-100 h-50"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2023090963016.jpg"
                            className="d-block w-100 h-50"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
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
                    data-bs-target="#carouselExample"
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

export default LowerCarousel;
