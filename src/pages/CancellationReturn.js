import React from "react";

function CancallationReturn(props) {
    return (
        <>
            <div className="d-flex my-5 justify-content-center">
                <h1
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Cancallations & Returns
                </h1>
            </div>
            <div className="container my-3">
                <p
                    className={`quicksand-medium-500 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    At BOOKit, we strive to ensure your experience with our
                    platform is as smooth and convenient as possible. We
                    understand that sometimes, you might need to cancel an order
                    or return a book for various reasons. To help you through
                    these processes, we've outlined our Cancellation and Returns
                    Policy below.
                    <br />
                    <ul>
                        <li>
                            Cancelling a Rental Order: If you've rented a book
                            and need to cancel the order, please contact our
                            customer support as soon as possible. Depending on
                            the timing and specific circumstances, you may be
                            eligible for a refund or credit.
                        </li>
                        <li>
                            Cancelling a Purchase Order: For purchases, if you
                            wish to cancel an order, please reach out to our
                            customer support. We will assist you with the
                            cancellation process, and any applicable refunds or
                            credits will be issued as per our policy.
                        </li>
                        <li>
                            Returns Physical Book Returns: If you've purchased a
                            physical book and wish to return it, please follow
                            these guidelines:{" "}
                            <ol>
                                <li>
                                    Return Eligibility: We accept returns of
                                    physical books within 2 days from the date
                                    of delivery, provided the book is in its
                                    original condition with no signs of damage
                                    or wear.
                                </li>
                                <li>
                                    Contact Customer Support: To initiate a
                                    return, please contact our customer support
                                    team. They will guide you through the
                                    process and provide you with a return
                                    authorization.
                                </li>
                                <li>
                                    Return Shipping: You are responsible for the
                                    cost of shipping the book back to us unless
                                    the return is a result of our error. We
                                    recommend using a trackable and insured
                                    shipping method.
                                </li>
                                <li>
                                    Refunds or Credits: Once we receive the
                                    returned book and confirm its condition, we
                                    will process the appropriate refund or
                                    credit to your account. Refunds will be
                                    issued to the original payment method.
                                </li>
                                <li>
                                    Damaged or Defective Items: In the rare
                                    event that you receive a damaged or
                                    defective book, please contact our customer
                                    support immediately. We will work to resolve
                                    the issue promptly, which may involve
                                    replacing the item or issuing a refund.
                                </li>
                            </ol>
                        </li>
                    </ul>
                </p>
                <br />
                <br />
            </div>
        </>
    );
}

export default CancallationReturn;
