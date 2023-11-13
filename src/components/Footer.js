import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
    return (
        <>
            <footer className="bg-dark text-center text-white w-100 h-auto">
                <div className="container p-4">
                    <section className="mb-4">
                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.facebook.com/"
                            role="button"
                        >
                            <i className="bi bi-facebook"></i>
                        </Link>

                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.whatsapp.com/"
                            role="button"
                        >
                            <i className="bi bi-whatsapp"></i>
                        </Link>

                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.instagram.com/bookit.site"
                            role="button"
                        >
                            <i className="bi bi-instagram"></i>
                        </Link>

                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.twitter.com/"
                            role="button"
                        >
                            <i className="bi bi-twitter-x"></i>
                        </Link>

                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.linkedin.com/"
                            role="button"
                        >
                            <i className="bi bi-linkedin"></i>
                        </Link>

                        <Link
                            className="btn btn-dark btn-floating btn-shadow-white m-1"
                            to="https://www.dicord.com/"
                            role="button"
                        >
                            <i className="bi bi-discord"></i>
                        </Link>
                    </section>

                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2 quicksand-medium-500">
                                        <strong>
                                            Sign up for our newsletter
                                        </strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input
                                            type="email"
                                            style={{
                                                backgroundColor:
                                                    props.mode === "dark"
                                                        ? "#4d4d4d"
                                                        : "white",
                                                WebkitTextFillColor:
                                                    props.mode === "dark"
                                                        ? "#BEBEBE"
                                                        : "black",
                                            }}
                                            id="form5Example2"
                                            className={`form-control quicksand-medium-500 text-${
                                                props.mode === "dark"
                                                    ? "light"
                                                    : "dark"
                                            }`}
                                            placeholder="Email Address"
                                        />
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button
                                        type="submit"
                                        className="btn quicksand-medium-500 btn-outline-light mb-4"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>

                    <section className="my-4">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase quicksand-medium-500">
                                    About Us
                                </h5>

                                <ul className="list-unstyled mb-0 my-3">
                                    <li>
                                        <Link
                                            to="/contact"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/about"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/terms"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            T&C
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/beliefs"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Beliefs
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase quicksand-medium-500">
                                    Help
                                </h5>

                                <ul className="list-unstyled mb-0 my-3">
                                    <li>
                                        <Link
                                            to="/policy"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/faq"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            FAQ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/help"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Help & Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/cancellation-return"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Cancellation & Returns
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase quicksand-medium-500">
                                    Policy
                                </h5>

                                <ul className="list-unstyled mb-0 my-3">
                                    <li>
                                        <Link
                                            to="/policy"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Return Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/policy"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Shipping Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/policy"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Terms Of Use
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/policy"
                                            className="text-white quicksand-medium-500 text-decoration-none"
                                        >
                                            Privacy
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                                <h5 className="text-uppercase quicksand-medium-500">
                                    Our Address
                                </h5>

                                <ul className="list-unstyled quicksand-medium-500 mb-0 my-3">
                                    Ramrao Adik Institue of Technology, DY Patil
                                    Deemed to be University, Nerul, Navi Mumbai,
                                    Maharashtra, 400706
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

                <div
                    className="text-center quicksand-medium-500 w-auto p-3"
                    style={{ backgroundColor: "#1a1a1a" }}
                >
                    © 2023 Copyright: BOOKit
                </div>
            </footer>
        </>
    );
}

export default Footer;
