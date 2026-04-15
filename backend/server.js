const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

//Connect MongoDB
mongoose.connect("mongodb+srv://diddishreya_db_user:TaO2QeZqZZbp3rJ6@cluster0.a3uzovm.mongodb.net/?appName=Cluster0")
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