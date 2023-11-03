const express = require("express");
const app = express();

const middleware = (req, res, next) => {
    console.log("This is middleware");
    next();
};
// does a task before loadin a page

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/profile", middleware, (req, res) => {
    console.log("Profile with middleware");
    res.send("Profile Page");
});

app.get("/sell-lend", (req, res) => {
    res.send("Sell Lend Page");
});

app.listen(8080, () => console.log("backend running at port 8080"));
