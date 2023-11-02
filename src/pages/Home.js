import React from "react";
import MainCarousel from "../components/MainCarousel.js";
import Search from "../components/Search";
import TopCategoriesCards from "../components/TopCategoriesCards";
import BarGraph from "../components/BarGraph";
import LowerCarousel from "../components/LowerCarousel";
import LowerDisplay from "../components/LowerDisplay";

function Home(props) {
    return (
        <>
            <div className="my-4">
                <Search mode={props.mode} toggleMode={props.toggleMode} />
            </div>

            <div className="container carousel-card-container my-5">
                <MainCarousel />
                <div className="my-5 text-md-center">
                    <h1
                        className={`quicksand-medium-500 text-${
                            props.mode === "light" ? "black" : "white"
                        }`}
                    >
                        Our Top Categories
                    </h1>
                </div>
                <TopCategoriesCards
                    mode={props.mode}
                    topGenres={props.topGenres}
                />
            </div>

            <div className="my-5">
                <h1
                    className={`text-center quicksand-medium-500 my-5 text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Recent Statistics
                </h1>
                <BarGraph mode={props.mode} topGenres={props.topGenres} />
            </div>

            <div className="my-3">
                <LowerCarousel />
            </div>

            <div className="container my-5">
                <LowerDisplay mode={props.mode} />
            </div>
        </>
    );
}

export default Home;
