const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dataModel = require("./dataModel");

mongoose.connect("mongodb://localhost/bookit", { useNewUrlParser: true });

app.get("/api/data", async (req, res) => {
    try {
        const data = await dataModel.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Could not fetch data" });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
