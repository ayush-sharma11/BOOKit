import React from "react";
import "../App.css";
import CustomFileUploadLight from "../components/CustomFileUploadLight";
import CustomFileUploadDark from "../components/CustomFileUploadDark";
import { Link } from "react-router-dom";

function SellLend(props) {
    return (
        <>
            <div className="container text-center my-5">
                <div className="row">
                    <div className="col-6">
                        <h1
                            className={`quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            Sell
                        </h1>
                        <div className="mb-3 my-3 d-flex justify-content-center">
                            {props.mode === "light" ? (
                                <CustomFileUploadLight />
                            ) : (
                                <CustomFileUploadDark />
                            )}
                        </div>
                        <div
                            className="input-group mb-3 w-75"
                            style={{ marginLeft: "4.5rem" }}
                        >
                            <input
                                type="text"
                                className={`form-control quicksand-medium-500 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                placeholder="Enter book name"
                                aria-label="book-name"
                                aria-describedby="button-addon2"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlTextarea1"
                                className="form-label"
                            ></label>
                            <textarea
                                className={`form-control quicksand-medium-500 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                placeholder="Enter book description"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>
                        <div className="my-3">
                            <label
                                htmlFor="formFileMultiple"
                                className="form-label"
                            ></label>
                            <input
                                className={`form-control quicksand-medium-500 input-${props.mode}`}
                                type="file"
                                id="formFileMultiple"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                multiple
                            />
                        </div>
                        <div className="mt-4">
                            <select
                                className={`form-select quicksand-medium-500 w-50 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                aria-label="Category select"
                            >
                                <option selected>Select the category</option>
                                <option value="1">Fiction</option>
                                <option value="2">Non Fiction</option>
                                <option value="3">Biography</option>
                                <option value="4">Education</option>
                                <option value="5">Self Help</option>
                                <option value="6">Finance</option>
                            </select>
                        </div>
                        <div>
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter ISBN"
                                aria-label="default input example"
                            />
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter author name"
                                aria-label="default input example"
                            />
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter publisher's name"
                                aria-label="default input example"
                            />
                        </div>
                        <div className="my-5">
                            <Link
                                to="/post-sell-lend"
                                type="button"
                                className={`btn quicksand-medium-500 btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                }`}
                            >
                                Submit
                            </Link>
                        </div>
                    </div>

                    <div className="col-6">
                        <h1
                            className={`quicksand-medium-500 text-${
                                props.mode === "dark" ? "light" : "dark"
                            }`}
                        >
                            Lend
                        </h1>
                        <div className="mb-3 my-3 d-flex justify-content-center">
                            {props.mode === "light" ? (
                                <CustomFileUploadLight />
                            ) : (
                                <CustomFileUploadDark />
                            )}
                        </div>
                        <div
                            className="input-group mb-3 w-75"
                            style={{ marginLeft: "4.5rem" }}
                        >
                            <input
                                type="text"
                                className={`form-control quicksand-medium-500 quicksand-medium-500 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                placeholder="Enter book name"
                                aria-label="book-name"
                                aria-describedby="button-addon2"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                for="exampleFormControlTextarea1"
                                className="form-label"
                            ></label>
                            <textarea
                                className={`form-control quicksand-medium-500 quicksand-medium-500 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                placeholder="Enter book description"
                                id="exampleFormControlTextarea1"
                                rows="3"
                            ></textarea>
                        </div>

                        <div className="my-3">
                            <label
                                htmlFor="formFileMultiple"
                                className="form-label"
                            ></label>
                            <input
                                className={`form-control quicksand-medium-500 input-${props.mode}`}
                                type="file"
                                id="formFileMultiple"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                }}
                                multiple
                            />
                        </div>

                        <div className="mt-4">
                            <select
                                className={`form-select quicksand-medium-500 w-50 text-${
                                    props.mode === "light" ? "dark" : "light"
                                }`}
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                aria-label="Category select"
                            >
                                <option selected>Select the category</option>
                                <option value="1">Fiction</option>
                                <option value="2">Non Fiction</option>
                                <option value="3">Biography</option>
                                <option value="3">Education</option>
                                <option value="3">Self Help</option>
                                <option value="3">Finance</option>
                            </select>
                        </div>
                        <div>
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter ISBN"
                                aria-label="default input example"
                            />
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter author name"
                                aria-label="default input example"
                            />
                            <input
                                className="form-control quicksand-medium-500 my-3 w-50"
                                style={{
                                    backgroundColor:
                                        props.mode === "dark"
                                            ? "#4d4d4d"
                                            : "white",
                                    WebkitTextFillColor:
                                        props.mode === "dark"
                                            ? "#BEBEBE"
                                            : "black",
                                    marginLeft: "10rem",
                                }}
                                type="text"
                                placeholder="Enter publisher's name"
                                aria-label="default input example"
                            />
                        </div>
                        <div className="my-5">
                            <Link
                                to="/post-sell-lend"
                                type="button"
                                className={`btn quicksand-medium-500 btn-${
                                    props.mode === "dark" ? "light" : "primary"
                                }`}
                            >
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SellLend;
