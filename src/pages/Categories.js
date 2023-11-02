import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import educationItems from "../data/education.json";
import financeItems from "../data/finance.json";
import selfHelpItems from "../data/self-help.json";
import "react-multi-carousel/lib/styles.css";

import { Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import { StoreItem } from "../components/StoreItem";

function Categories(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    return (
        <>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Fiction
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {fictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>

            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Non Fiction
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {nonFictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Biography
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {biographyItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Self Help
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {selfHelpItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Education
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {educationItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Finance
                </h1>
                <Carousel
                    md={2}
                    xs={1}
                    lg={3}
                    className="my-5 mx-2"
                    responsive={responsive}
                    infinite={true}
                    swipeable={true}
                    draggable={true}
                    ssr={true}
                    showDots={false}
                    // renderDotsOutside={true}
                    containerclassName="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {financeItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Carousel>
            </div>
        </>
    );
}
export default Categories;
