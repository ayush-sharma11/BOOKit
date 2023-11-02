import { Stack, Button } from "react-bootstrap";
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
    const [play] = useSound("/sounds/lessgoo.mp3");
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
                    <Button
                        variant={props.mode === "light" ? "primary" : "success"}
                        onClick={play}
                        className="quicksand-medium-500"
                    >
                        Proceed to Buy
                    </Button>
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
