import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import educationItems from "../data/education.json";
import financeItems from "../data/finance.json";
import selfHelpItems from "../data/self-help.json";

import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

function LatestArrivals(props) {
    return (
        <>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Our Latest Arrivals
                </h1>
            </div>
            <div className="container my-5">
                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {fictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>

                <div className="latest-arrivals-card-gap my-4"></div>

                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {nonFictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>

                <div className="latest-arrivals-card-gap my-4"></div>

                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {biographyItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>

                <div className="latest-arrivals-card-gap my-4"></div>

                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {educationItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>

                <div className="latest-arrivals-card-gap my-4"></div>

                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {financeItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>

                <div className="latest-arrivals-card-gap my-4"></div>

                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    {selfHelpItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
}
export default LatestArrivals;
