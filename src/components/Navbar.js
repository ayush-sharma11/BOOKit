import React, { useState } from "react";
import "../App.css";
import { ReactComponent as LogoDS } from "./BOOKit_icon_DesertSand.svg";
import { ReactComponent as LogoW } from "./BOOKit_icon_Black.svg";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffcanvasBody from "./OffcanvasBody";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext.tsx";

function Navbar(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { openCart, cartQuantity } = useShoppingCart();

    return (
        <>
            <div>
                <nav
                    className="navbar sticky-top"
                    style={
                        props.mode === "light"
                            ? { backgroundColor: "#6585e7" }
                            : { backgroundColor: "#1a1a1a" }
                    }
                >
                    <div className="container-fluid logo-align d-inline-flex justify-content-center">
                        <Link className="navbar-brand mx-0" to="/home">
                            {props.mode === "dark" ? <LogoDS /> : <LogoW />}
                        </Link>
                        <Link to="/home">
                            <h1 className="text-center text-light my-1 quicksand-medium-500 d-inline-block">
                                BOOKit
                            </h1>
                        </Link>
                    </div>
                    <div className="container-fluid d-inline-flex justify-content-center">
                        <h4 className="text-light text-center scope-one-regular-400">
                            READ. RETURN. REPEAT.
                        </h4>
                    </div>
                </nav>
                <nav
                    className={`navbar navbar-expand-lg shadow-sm navbar-${
                        props.mode === "dark" ? "dark" : "light"
                    }`}
                    style={
                        props.mode === "light"
                            ? { backgroundColor: "#bdcbf5" }
                            : { backgroundColor: "#242629" }
                    }
                >
                    <div className="container-fluid">
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav mx-3 quicksand-medium-500">
                                <Button
                                    variant="link text-decoration-none"
                                    onClick={handleShow}
                                >
                                    <i
                                        className={`bi bi-list d-inline mx-1 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                    ></i>
                                    <p
                                        className={`d-inline quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                    >
                                        All
                                    </p>
                                </Button>

                                <Offcanvas
                                    className={`merriweather-sans-light-300 text-bg-${
                                        props.mode === "dark" ? "dark" : "light"
                                    }`}
                                    show={show}
                                    onHide={handleClose}
                                >
                                    <Offcanvas.Header
                                        closeVariant={
                                            props.mode === "dark"
                                                ? "white"
                                                : "black"
                                        }
                                        closeButton
                                    >
                                        <Offcanvas.Title>
                                            <h4 className="quicksand-medium-500">
                                                ALL OPTIONS
                                            </h4>
                                        </Offcanvas.Title>
                                    </Offcanvas.Header>

                                    <Offcanvas.Body>
                                        <OffcanvasBody mode={props.mode} />
                                    </Offcanvas.Body>
                                </Offcanvas>

                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/categories"
                                    >
                                        Categories
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/sell-lend"
                                    >
                                        Sell/Lend
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/latest-arrivals"
                                    >
                                        Latest Arrivals
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/best-sellers"
                                    >
                                        Best Sellers
                                    </NavLink>
                                </li>
                                <li className="nav-item mx-1">
                                    <NavLink
                                        style={{ textDecoration: "none" }}
                                        className={`nav-link quicksand-medium-500 text-${
                                            props.mode === "dark"
                                                ? "light"
                                                : "dark"
                                        }`}
                                        to="/box-sets"
                                    >
                                        Box Sets
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end mx-4">
                        <input
                            className="form-check-input invisible"
                            onClick={props.toggleMode}
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                        />
                        <label
                            className="d-flex mx-3 align-items-center"
                            style={{ fontSize: "1.75rem" }}
                        >
                            <input
                                type="checkbox"
                                onClick={props.toggleMode}
                                style={{ display: "none" }}
                            />
                            <div className="container d-flex align-items-center">
                                {props.mode === "light" ? (
                                    <i
                                        className="bi bi-sun icon-shadow-yellow"
                                        style={{ color: "black" }}
                                    ></i>
                                ) : (
                                    <i
                                        className="bi bi-moon icon-shadow-white"
                                        style={{ color: "white" }}
                                    ></i>
                                )}
                            </div>
                        </label>

                        <NavLink
                            to="/profile"
                            className={`btn mt-1 my-1 btn-${
                                props.mode === "dark" ? "light" : "primary"
                            } `}
                            type="button"
                        >
                            <i className="bi bi-person-fill"></i>
                        </NavLink>

                        <NavLink
                            to="/cart"
                            className={`btn mt-1 my-1 mr-3 position-relative btn-${
                                props.mode === "dark" ? "light" : "primary"
                            } `}
                            type="button"
                            onClick={openCart}
                        >
                            <i className="bi bi-cart-fill"></i>
                            <span
                                className={`badge position-absolute text-bg-${
                                    props.mode === "dark" ? "danger" : "warning"
                                }`}
                            >
                                {cartQuantity}
                            </span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;
