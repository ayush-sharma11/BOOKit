import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import financeItems from "../data/finance.json";
import educationItems from "../data/education.json";
import selfHelpItems from "../data/self-help.json";
import { formatCurrency } from "../utilities/formatCurrency";
import React from "react";

type CartItemProps = {
    id: number;
    quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart();
    const item =
        fictionItems.find((i) => i.id === id) ||
        nonFictionItems.find((i) => i.id === id) ||
        biographyItems.find((i) => i.id === id) ||
        financeItems.find((i) => i.id === id) ||
        educationItems.find((i) => i.id === id) ||
        selfHelpItems.find((i) => i.id === id);
    if (item === null) return null;

    return (
        <>
            <Stack
                direction="horizontal"
                gap={3}
                className="d-flex align-items-center"
            >
                <img
                    src={item?.imgUrl}
                    style={{
                        width: "25rem",
                        height: "auto",
                        objectFit: "cover",
                        borderRadius: "1rem",
                    }}
                    alt=""
                />

                <div className="me-auto mx-2">
                    <div>
                        <div
                            className="quicksand-medium-500"
                            style={{ fontSize: "1.75rem" }}
                        >
                            {item?.name}
                        </div>{" "}
                        {quantity > 1 && (
                            <span
                                className="text-success quicksand-medium-500"
                                style={{ fontSize: "0.85rem" }}
                            >
                                x{quantity}
                            </span>
                        )}
                    </div>
                    <div
                        className="text-success quicksand-medium-500 my-1"
                        style={{ fontSize: "0.85rem" }}
                    >
                        {formatCurrency(item!.price)} per item
                    </div>
                    <div className="my-1 quicksand-medium-500">
                        {formatCurrency(item!.price * quantity)}
                    </div>
                    <Button
                        variant="danger"
                        size="sm"
                        className="quicksand-medium-500"
                        onClick={() => removeFromCart(item!.id)}
                    >
                        &times; remove
                    </Button>
                </div>
            </Stack>
        </>
    );
}
