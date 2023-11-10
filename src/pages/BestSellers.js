import React from "react";

import { Row, Col } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

import fictionItems from "../data/fiction.json";
import nonFictionItems from "../data/non-fiction.json";
import biographyItems from "../data/biography.json";
import educationItems from "../data/education.json";
import financeItems from "../data/finance.json";
import selfHelpItems from "../data/self-help.json";

function BestSellers(props) {
    return (
        <>
            <div className="container my-5">
                <h1
                    className={`quicksand-medium-500 container text-start text-${
                        props.mode === "dark" ? "light" : "dark"
                    }`}
                >
                    Our Best Sellers
                </h1>
            </div>
            <div className="container my-5">
                <Row md={2} xs={1} lg={3} className="gx-3 gy-4">
                    <Col>
                        <StoreItem {...fictionItems[0]} mode={props.mode} />
                    </Col>
                    <Col>
                        <StoreItem {...nonFictionItems[0]} mode={props.mode} />
                    </Col>
                    <Col>
                        <StoreItem {...biographyItems[0]} mode={props.mode} />
                    </Col>
                    <Col>
                        <StoreItem {...educationItems[0]} mode={props.mode} />
                    </Col>
                    <Col>
                        <StoreItem {...financeItems[0]} mode={props.mode} />
                    </Col>
                    <Col>
                        <StoreItem {...selfHelpItems[0]} mode={props.mode} />
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default BestSellers;
