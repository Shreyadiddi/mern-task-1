const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Connect MongoDB
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

//Sample Schema
const ItemSchema = new mongoose.Schema({
    name: String
});

const Item = mongoose.model("Item", ItemSchema);

//API Route
app.get("/api/items", async(req, res) => {
    const items = await Item.find();
    res.json(items);
});

//Insert sample data (optional)
app.get("/add", async (req, res) => {
    await Item.create({name: "Hello from backend"});
    res.send("Item added");
});

app.listen(5000, () => console.log("Server running on port 5000"));