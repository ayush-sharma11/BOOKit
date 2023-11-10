import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import educationItems from "../data/education.json";
import financeItems from "../data/finance.json";
import selfHelpItems from "../data/self-help.json";
import "react-multi-carousel/lib/styles.css";

import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

function LatestArrivals(props) {
    return (
        <>
            <div className="container my-5">
                <Row md={2} xs={1} lg={3} className="g-3">
                    {fictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
                <div className="latest-arrivals-card-gap my-4"></div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {nonFictionItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
                <div className="latest-arrivals-card-gap my-4"></div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {biographyItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
                <div className="latest-arrivals-card-gap my-4"></div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {educationItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
                <div className="latest-arrivals-card-gap my-4"></div>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {financeItems.map((item) => (
                        <Col key={item.id}>
                            <StoreItem {...item} mode={props.mode} />
                        </Col>
                    ))}
                </Row>
                <div className="latest-arrivals-card-gap my-4"></div>
                <Row md={2} xs={1} lg={3} className="g-3">
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
