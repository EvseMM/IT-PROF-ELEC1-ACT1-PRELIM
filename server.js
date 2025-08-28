import express from "express";
import cors from "cors";
import transpo from "./transpo.js";
import products from "./products.js";
import students from "./student.js";


const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from backend!" });
});

app.get("/api/transpo", (req, res) => {
    res.json(transpo);
});

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.get("/api/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});