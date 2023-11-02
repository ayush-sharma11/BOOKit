import React from "react";
import { Link } from "react-router-dom";

function Policy(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Our Policy
                </h1>
            </div>
            <div className="container my-3">
                <p
                    className={`my-3 quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    <h2
                        className={`my-3 text-${
                            props.mode === "dark" ? "light" : "dark"
                        }`}
                    >
                        Welcome to BOOKit's Policy Page
                    </h2>
                    Here, we outline the guidelines and principles that govern
                    the use of our platform and services.
                    <br />
                    Please read these policies carefully to ensure a safe,
                    respectful, and enjoyable experience for all users.
                    <br />
                    <br />
                    <ul>
                        <li>
                            Privacy Policy: BOOKit values your privacy and is
                            committed to protecting your personal information.
                            Our Privacy Policy outlines how we collect, use, and
                            safeguard your data.
                        </li>
                        <li>
                            Terms of Service: By using BOOKit, you agree to
                            abide by our Terms of Service. These terms detail
                            the rules and responsibilities for both users and
                            BOOKit. It is important to understand and comply
                            with these terms. You can find our full Terms of
                            Service on our{" "}
                            <Link
                                to="/"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                Terms
                            </Link>{" "}
                            Page.
                        </li>
                        <li>
                            Content Guidelines: At BOOKit, we promote respectful
                            and responsible content sharing. Users are expected
                            to follow our Content Guidelines, which include
                            refraining from sharing offensive, harmful, or
                            copyrighted material. For detailed information,
                            please refer to our{" "}
                            <Link
                                to="/"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                Guidelines
                            </Link>{" "}
                            Page.
                        </li>
                        <li>
                            Community Guidelines: BOOKit is more than just a
                            platform; it's a community of book enthusiasts. To
                            ensure a positive and welcoming environment, we have
                            established Community Guidelines. These guidelines
                            cover appropriate conduct, respect for fellow users,
                            and maintaining a healthy and productive discussion
                            space. Please review our Community Guidelines on our{" "}
                            <Link
                                to="/"
                                className={`text-${
                                    props.mode === "dark" ? "danger" : "primary"
                                }`}
                                style={{ textDecoration: "none" }}
                            >
                                Guidelines Page
                            </Link>
                        </li>
                        <li>
                            Copyright and Intellectual Property: Respect for
                            copyright and intellectual property is of utmost
                            importance. Users should only share content they
                            have the right to share and respect the rights of
                            authors and publishers. Our Copyright and
                            Intellectual Property Policy provides essential
                            information on this subject.
                        </li>
                        <li>
                            Refund and Return Policy: For users renting or
                            purchasing physical books, please review our Refund
                            and Return Policy for details on returning or
                            refunding items.
                            <ol>
                                <li>
                                    No Warranty: BOOKit provides its services
                                    "as is" and "as available" without any
                                    warranty. We do not guarantee the accuracy
                                    or reliability of the content provided on
                                    our platform.
                                </li>
                                <li>
                                    Liability: BOOKit shall not be liable for
                                    any direct, indirect, incidental, special,
                                    or consequential damages resulting from the
                                    use or inability to use our services.
                                    Indemnification You agree to indemnify and
                                    hold BOOKit, its subsidiaries, affiliates,
                                    officers, agents, and other partners and
                                    employees harmless from any loss, liability,
                                    claim, or demand, including reasonable
                                    attorney's fees, made by any third party due
                                    to or arising out of your use of our
                                    services.
                                </li>
                            </ol>{" "}
                        </li>
                        <li>
                            Environmental Responsibility: BOOKit is committed to
                            reducing the environmental impact of the book
                            industry. Our Environmental Responsibility Policy
                            underscores our efforts to promote sustainability
                            and reduce paper waste.
                        </li>
                    </ul>
                    <br />
                    Contact Us If you have any questions or concerns about our
                    policies or your experience with BOOKit, please feel free to
                    contact us through our{" "}
                    <Link
                        to="/contact"
                        className={`text-${
                            props.mode === "dark" ? "danger" : "primary"
                        }`}
                        style={{ textDecoration: "none" }}
                    >
                        Contact Us
                    </Link>{" "}
                    page.
                    <br />
                    <br />
                    We are here to assist and address any inquiries or issues
                    you may have. By using BOOKit, you agree to adhere to the
                    policies and guidelines outlined on this page. We encourage
                    all users to contribute to a positive and respectful
                    community and to embrace the joy of reading and sharing
                    knowledge. Thank you for choosing BOOKit as your literary
                    companion. Happy reading!
                </p>
            </div>
            <br />
            <br />
        </>
    );
}

export default Policy;
