import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

type StoreItemProps = {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
    desc: string;
    mode: string;
};

export function StoreItem({
    id,
    name,
    price,
    imgUrl,
    desc,
    mode,
}: StoreItemProps) {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <>
            <Card
                className={`h-100 bg-${
                    mode === "dark" ? "dark" : "light"
                } mx-2`}
                border={mode === "dark" ? "secondary" : ""}
            >
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    style={{ objectFit: "cover", height: "200px" }}
                />
                <Card.Body
                    className={`d-flex flex-column text-${
                        mode === "dark" ? "light" : "dark"
                    } `}
                >
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2 quicksand-medium-500">
                            {name}
                        </span>
                        <span
                            className={`ms-2 text-${
                                mode === "dark" ? "secondary" : "muted"
                            } quicksand-medium-500`}
                        >
                            {formatCurrency(price)}
                        </span>
                    </Card.Title>
                    <p
                        className={`quicksand-medium-500 text-${
                            mode === "dark" ? "light" : "dark"
                        }`}
                    >
                        {desc}
                    </p>
                    <div className="mt-auto">
                        {quantity === 0 ? (
                            <div>
                                <Button
                                    className={`btn btn-${
                                        mode === "dark" ? "light" : "primary"
                                    }`}
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    <i className="bi bi-cart-fill"></i>
                                </Button>
                                <Button
                                    className={`btn mx-2 btn-${
                                        mode === "dark" ? "light" : "primary"
                                    }`}
                                >
                                    <i className="bi bi-suit-heart-fill"></i>
                                </Button>
                            </div>
                        ) : (
                            <div
                                className="d-flex align-items-center flex-column"
                                style={{ gap: "0.5rem" }}
                            >
                                <div
                                    className="d-flex align-items-center mb-2 justify-content-center"
                                    style={{ gap: "0.5rem" }}
                                >
                                    <Button
                                        onClick={() => decreaseCartQuantity(id)}
                                        className={`btn-sm btn-${
                                            mode === "dark"
                                                ? "light"
                                                : "primary"
                                        }`}
                                    >
                                        <b className="quicksand-medium-500">
                                            -
                                        </b>
                                    </Button>
                                    <div className="quicksand-medium-500">
                                        <span className="fs-3 quicksand-medium-500">
                                            {quantity}{" "}
                                        </span>
                                        in cart
                                    </div>
                                    <Button
                                        onClick={() => increaseCartQuantity(id)}
                                        className={`btn-sm btn-${
                                            mode === "dark"
                                                ? "light"
                                                : "primary"
                                        }`}
                                    >
                                        <b className="quicksand-medium-500">
                                            +
                                        </b>
                                    </Button>
                                </div>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => removeFromCart(id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
