import React from "react";
import { Link } from "react-router-dom";

function Help(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Help and Support
                </h1>
            </div>
            <div className="container">
                <p
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    <h4>
                        Welcome to the BOOKit Help and Support page. We're here
                        to assist you in making the most of your BOOKit
                        experience. If you have questions or encounter any
                        issues, you'll find the resources and guidance you need
                        below.
                    </h4>
                    <br />
                    <ul>
                        <li>
                            Getting Started How to Create an Account: If you're
                            new to BOOKit, you can get started by creating an
                            account on our{" "}
                            <Link
                                to="/profile"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                profile
                            </Link>{" "}
                            page to access our services.
                        </li>
                        <li>
                            Navigating the Platform: Learn how to browse and
                            explore our extensive book collection, manage your
                            account, and find the books you're looking for.
                        </li>
                        <li>
                            Order Assistance Renting a Book: If you're
                            interested in renting a book, our add your favourite
                            book to cart and then select the "rent" option. For
                            other rent related question check out our{" "}
                            <Link
                                to="/policy"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                policy{" "}
                            </Link>{" "}
                            or our{" "}
                            <Link
                                to="/faq"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                faq{" "}
                            </Link>{" "}
                            page; or{" "}
                            <Link
                                to="/contact"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                contact{" "}
                            </Link>{" "}
                            us.
                        </li>
                        <li>
                            Purchasing a Book: For those who prefer to own
                            books, we allow you to but books to. Just add your
                            favourite book to cart and select buy option.
                        </li>
                        <li>
                            Checking Order Status: You can track your orders and
                            check their status using your BOOKit account. Or
                            cantact us if you have any queries.
                        </li>
                        <li>
                            Community Engagement Participating in Discussions:
                            BOOKit offers a thriving community of book
                            enthusiasts. Find out how to join discussions, share
                            your thoughts, and explore diverse literary worlds
                            with fellow readers.
                        </li>
                        <li>
                            Getting Book Recommendations: Our personalized
                            recommendation system can help you discover books
                            tailored to your interests. Cnotact us if you have
                            any queries regarding the same.
                        </li>
                        <li>
                            Privacy and Security Privacy Policy: Your privacy is
                            important to us. For details on how we handle your
                            personal information, please review our{" "}
                            <Link
                                to="/policy"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                policy{" "}
                            </Link>{" "}
                            page.
                        </li>
                        <li>
                            Security Measures: BOOKit is committed to
                            maintaining a secure platform. Find information on
                            the security measures we employ on our{" "}
                            <Link
                                to="/policy"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                policy{" "}
                            </Link>{" "}
                            or our{" "}
                            <Link
                                to="/faq"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                {" "}
                                faq{" "}
                            </Link>{" "}
                            page.
                        </li>
                    </ul>
                    <br />
                    <h3>
                        Feel free to cantact us for any additional help &
                        support.
                    </h3>
                    <br />
                    <h3>Happy Reading!</h3>
                </p>
                <br />
                <br />
            </div>
        </>
    );
}

export default Help;
