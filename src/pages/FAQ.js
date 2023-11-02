import React from "react";
import { Link } from "react-router-dom";

function FAQ(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Frequenty Asked Questions (FAQs)
                </h1>
            </div>
            <div className="container my-3">
                <p
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    <h3>
                        We've compiled answers to common questions to assist you
                        in making the most of your BOOKit experience. If you
                        don't find the information you're looking for, please
                        feel free to{" "}
                        <Link
                            to="/contact"
                            className={`text-${
                                props.mode === "dark" ? "danger" : "primary"
                            }`}
                            style={{ textDecoration: "none" }}
                        >
                            contact us
                        </Link>
                        .
                    </h3>{" "}
                    <br />
                    <ol>
                        <li className="bold-li">
                            <strong>What is BOOKit?</strong> - BOOKit is an
                            online platform designed for book enthusiasts. We
                            offer a wide range of services, including book
                            rentals, purchases, and a vibrant reading community.
                        </li>
                        <li className="bold-li">
                            <strong>How can I use BOOKit?</strong> - To use
                            BOOKit, simply sign up for an account, browse our
                            extensive book collection, and choose the service
                            that suits you, whether it's renting, purchasing, or
                            participating in our reading community.
                        </li>
                        <li className="bold-li">
                            <strong>Is BOOKit free to use?</strong> - Creating
                            an account on BOOKit is free. However, the cost of
                            renting or purchasing books is determined by the
                            specific book and service.
                        </li>
                        <li className="bold-li">
                            <strong>
                                What types of books can I find on BOOKit?
                            </strong>{" "}
                            - BOOKit offers a diverse collection of books,
                            including classics, bestsellers, textbooks, and
                            more. You'll find a wide range of genres and
                            languages to choose from. Renting and Purchasing
                        </li>
                        <li className="bold-li">
                            <strong>How does book rental work?</strong> -
                            Renting a book on BOOKit allows you to access the
                            book for a specified duration. You can read it at
                            your own pace, and then return it when your rental
                            period ends.
                        </li>
                        <li className="bold-li">
                            <strong>
                                What are the options for purchasing books on
                                BOOKit?
                            </strong>
                            - You can purchase both new(or almost new) and used
                            books on BOOKit. New books are in excellent
                            condition, while used books may have some wear. You
                            can choose the option that suits your preferences
                            and budget.
                        </li>
                        <li className="bold-li">
                            <strong>Do you have e-books available?</strong> -
                            Unfortunately, as of now, we do not have the feature
                            to rent/lend or sell/buy e-books. We are working on
                            adding those features and will add them soon.
                        </li>
                        <li className="bold-li">
                            <strong>
                                How can I engage with the BOOKit community?
                            </strong>{" "}
                            - To engage with our community, you can participate
                            in discussions, share book reviews, and get
                            personalized book recommendations based on your
                            reading history.
                        </li>
                        <li className="bold-li">
                            <strong>
                                Can I create my own reading group on BOOKit?
                            </strong>{" "}
                            - At the moment, we do not offer the feature to
                            create your own reading group, but you can join
                            existing discussions and groups within the
                            community. Security and Privacy
                        </li>
                        <li className="bold-li">
                            <strong>
                                Is my personal information safe on BOOKit?
                            </strong>{" "}
                            - Yes, we take your privacy and security seriously.
                            Your personal information and transactions are
                            handled with the utmost care and protection. For
                            more details, please review our{" "}
                            <Link
                                to="/policy"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                Policy
                            </Link>{" "}
                            Page.
                        </li>
                        Contact Us If you have any additional questions or
                        require assistance, don't hesitate to{" "}
                        <Link
                            to="/contact"
                            className={`text-${
                                props.mode === "dark" ? "danger" : "primary"
                            }`}
                            style={{ textDecoration: "none" }}
                        >
                            contact us
                        </Link>
                        .
                    </ol>
                    <br />
                    <h5>
                        We're here to help make your BOOKit experience enjoyable
                        and trouble-free. Thank you for choosing BOOKit for your
                        reading adventures. Happy reading!
                    </h5>
                </p>
                <br />
                <br />
            </div>
        </>
    );
}

export default FAQ;
