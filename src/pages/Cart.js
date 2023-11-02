import { useState } from "react";
import { Stack, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import financeItems from "../data/finance.json";
import educationItems from "../data/education.json";
import selfHelpItems from "../data/self-help.json";

import useSound from "use-sound";

function Cart(props) {
    const { cartItems, cartQuantity } = useShoppingCart();
    // const [play] = useSound("/sounds/lessgoo.mp3");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="d-flex my-5">
                <h1
                    className={`quicksand-medium-500 d-flex container text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Your Cart
                </h1>
            </div>
            <div className="container my-5">
                <Stack
                    gap={4}
                    className={`d-flex align-items-center text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div
                        className={`ms-auto quicksand-medium-500 text-${
                            props.mode === "dark" ? "light" : "dark"
                        } fw-bold fs-5`}
                    >
                        Total:{" "}
                        {formatCurrency(
                            cartItems.reduce((total, cartItem) => {
                                const item =
                                    fictionItems.find(
                                        (i) => i.id === cartItem.id
                                    ) ||
                                    nonFictionItems.find(
                                        (i) => i.id === cartItem.id
                                    ) ||
                                    biographyItems.find(
                                        (i) => i.id === cartItem.id
                                    ) ||
                                    financeItems.find(
                                        (i) => i.id === cartItem.id
                                    ) ||
                                    selfHelpItems.find(
                                        (i) => i.id === cartItem.id
                                    ) ||
                                    educationItems.find(
                                        (i) => i.id === cartItem.id
                                    );
                                return (
                                    total +
                                    (item?.price || 0) * cartItem.quantity
                                );
                            }, 0)
                        )}{" "}
                    </div>
                </Stack>
            </div>
            <div className="container my-5 d-flex justify-content-center">
                {cartQuantity !== 0 ? (
                    <div>
                        <Button
                            variant={
                                props.mode === "light" ? "primary" : "success"
                            }
                            // onClick={play}
                            onClick={handleShow}
                            className="quicksand-medium-500"
                        >
                            Proceed to Buy
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title className="quicksand-medium-500">
                                    BOOKit says
                                </Modal.Title>
                            </Modal.Header>

                            <Modal.Body className="quicksand-medium-500">
                                Congratulations you have successfully purchased
                                the product!
                            </Modal.Body>

                            <Modal.Footer>
                                <Button
                                    className="btn btn-secondary"
                                    onClick={handleClose}
                                >
                                    <i className="bi bi-x-lg"></i>
                                </Button>
                                <Link
                                    to="/home"
                                    className="btn btn-primary quicksand-medium-500"
                                    onClick={handleClose}
                                >
                                    <i className="bi bi-house"></i> Home
                                </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                ) : (
                    <div>
                        <h2
                            className={`d-flex justify-content-center quicksand-medium-500 my-2 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            Your cart is empty.
                        </h2>
                        <h2
                            className={`my-3 quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            Add something to the cart.
                        </h2>
                    </div>
                )}
            </div>
        </>
    );
}

export default Cart;
