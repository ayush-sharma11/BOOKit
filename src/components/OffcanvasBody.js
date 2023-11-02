import React from "react";
import { Link } from "react-router-dom";

function OffcanvasBody(props) {
    return (
        <>
            <b>
                <div className="list-group">
                    <div className="container my-2 ">
                        <p>
                            <Link
                                to="profile"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Profile
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="wishlist"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Wishlist
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="Cart"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Cart
                            </Link>
                        </p>
                    </div>

                    <hr className="solid" />

                    <div className="container my-2 ">
                        <p>
                            <Link
                                to="categories"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Categories
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="sell-lend"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Sell/Lend
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="new-arrivals"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                New Arrivals
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="best-sellers"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Best Sellers
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="box-sets"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Box Sets
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="merchandise"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Merchandise
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="accessories"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Accessories
                            </Link>
                        </p>
                    </div>

                    <hr className="solid" />

                    <div className="container my-2 ">
                        <p>
                            <Link
                                to="contact"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Contact Us
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="about"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                About Us
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="faq"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                FAQs
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="help"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Help & Support
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="beliefs"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Beliefs
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="policy"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Policy
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="terms"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Terms and Conditions
                            </Link>
                        </p>
                        <p>
                            <Link
                                to="cancellation-return"
                                className={`quicksand-medium-500 link-underline-primary fw-normal text-${
                                    props.mode === "dark" ? "light" : "dark"
                                } text-decoration-none`}
                            >
                                Cancellations and Returns
                            </Link>
                        </p>
                    </div>
                </div>
            </b>
        </>
    );
}

export default OffcanvasBody;
