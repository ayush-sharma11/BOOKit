import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import BestSellers from "./pages/BestSellers";
import BoxSets from "./pages/BoxSets";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Merchandise from "./pages/Merchandise";
import LatestArrivals from "./pages/LatestArrivals";
import Profile from "./pages/Profile";
import SellLend from "./pages/SellLend";
import Error from "./pages/Error";
import Wishlist from "./pages/Wishlist";
import Contact from "./pages/Contact";
import CancellationReturn from "./pages/CancellationReturn";
import FAQ from "./pages/FAQ";
import Help from "./pages/Help";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Beliefs from "./pages/Beliefs";
import Footer from "./components/Footer";
import PostSellLend from "./pages/PostSellLend";
import ProfileCreateAccount from "./components/ProfileCreateAccount";
import ProfileLogin from "./components/ProfileLogin";

import Dummy from "./pages/Dummy";

const topGenres = [
    "Fiction",
    "Non Fiction",
    "Biography",
    "Self Help",
    "Education",
    "Finance",
];

function App() {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light");

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("/api/books")
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    useEffect(() => {
        const savedMode = localStorage.getItem("mode") || "light";
        setMode(savedMode);
    }, []);

    useEffect(() => {
        localStorage.setItem("mode", mode);
    }, [mode]);

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
        } else {
            setMode("light");
        }
    };

    if (mode === "light") {
        document.documentElement.style.setProperty(
            "--scrollbar-track-color",
            "#D3D3D3"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-thumb-color",
            "#3F5DBB"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-thumb-hover-color",
            "#9AAEFB"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-button-color",
            "#00008B"
        );
    } else {
        document.documentElement.style.setProperty(
            "--scrollbar-track-color",
            "#4D4D4D"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-thumb-color",
            "gray"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-thumb-hover-color",
            "gainsboro"
        );
        document.documentElement.style.setProperty(
            "--scrollbar-button-color",
            "#1A1A1A"
        );
    }

    return (
        <>
            <ShoppingCartProvider>
                <Router>
                    <div
                        style={{
                            backgroundColor:
                                mode === "light" ? "white" : "#36393E",
                        }}
                    >
                        <Navbar mode={mode} toggleMode={toggleMode} />
                        <Routes>
                            <Route
                                path="/dummy"
                                element={<Dummy mode={mode} data={data} />}
                            />

                            <Route
                                path="/"
                                exact
                                element={
                                    <Home mode={mode} topGenres={topGenres} />
                                }
                            ></Route>

                            <Route
                                path="/categories"
                                exact
                                element={
                                    <Categories
                                        mode={mode}
                                        topGenres={topGenres}
                                    />
                                }
                            ></Route>

                            <Route
                                exact
                                path="/home"
                                element={
                                    <Home mode={mode} topGenres={topGenres} />
                                }
                            ></Route>
                            <Route
                                path="/cart"
                                element={<Cart mode={mode} />}
                            />
                            <Route
                                path="/profile"
                                element={<Profile mode={mode} />}
                            />
                            <Route
                                path="/login"
                                element={<ProfileLogin mode={mode} />}
                            />
                            <Route
                                path="/create-account"
                                element={<ProfileCreateAccount mode={mode} />}
                            />
                            <Route
                                path="/wishlist"
                                element={<Wishlist mode={mode} />}
                            />

                            <Route
                                path="/sell-lend"
                                element={<SellLend mode={mode} />}
                            />
                            <Route
                                path="/post-sell-lend"
                                element={<PostSellLend mode={mode} />}
                            />
                            <Route
                                path="/latest-arrivals"
                                element={<LatestArrivals mode={mode} />}
                            />
                            <Route
                                path="/best-sellers"
                                element={<BestSellers mode={mode} />}
                            />
                            <Route
                                path="/box-sets"
                                element={<BoxSets mode={mode} />}
                            />
                            <Route
                                path="/merchandise"
                                element={<Merchandise mode={mode} />}
                            />
                            <Route
                                path="/accessories"
                                element={<Accessories mode={mode} />}
                            />

                            <Route
                                path="/contact"
                                element={<Contact mode={mode} />}
                            />
                            <Route
                                path="/about"
                                element={<About mode={mode} />}
                            />
                            <Route
                                path="/terms"
                                element={<Terms mode={mode} />}
                            />
                            <Route path="/faq" element={<FAQ mode={mode} />} />
                            <Route
                                path="/help"
                                element={<Help mode={mode} />}
                            />
                            <Route
                                path="/cancellation-return"
                                element={<CancellationReturn mode={mode} />}
                            />
                            <Route
                                path="/policy"
                                element={<Policy mode={mode} />}
                            />
                            <Route
                                path="/beliefs"
                                element={<Beliefs mode={mode} />}
                            ></Route>

                            <Route
                                path="*"
                                element={<Error mode={mode} />}
                            ></Route>
                        </Routes>
                        <Footer mode={mode} />
                    </div>
                </Router>
            </ShoppingCartProvider>
        </>
    );
}

export default App;
