import express from "express";
import mongoose, { Schema, connect } from "mongoose";
import "dotenv/config";
import cors from 'cors';

const app = express();
app.use(cors());


app.use(express.json());

const categorySchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
});

const userSchema = new Schema({
  title: {
    type:String,
    require:true
  },
  image: String,
  price: Number,
  description: String,
});
const categoryModel = mongoose.model("category", categorySchema);
const userModel = mongoose.model("user", userSchema);

app.get("/category", async (req, res) => {
  const categories = await categoryModel.find();
  res.send(categories);
});

app.get("/category/:id", async (req, res) => {
  const { id } = req.params;
  const category = await categoryModel.findById(id);
  res.send(category);
});

app.delete("/category/:id", async (req, res) => {
  const { id } = req.params;
  const category = await categoryModel.findByIdAndDelete(id);
  res.send("Bu mehsul silindi ...");
});

app.put("/category/:id", async (req, res) => {
  const { id } = req.params;
  const { title, image, price, description } = req.body;
  const category = await categoryModel.findByIdAndUpdate(id,{title, image, price, description});
  res.send("Bu mehsul update olundu ...");
});

app.post("/category", async (req, res) => {
  const { title, image, price, description } = req.body;
  const newCategory = new categoryModel({ title, image, price, description });
  await newCategory.save();
  res.sendStatus(200).send("Data elave olundu");
});

app.listen(process.env.PORT, () => {
  console.log(`this website running port ${process.env.PORT}`);
});

connect(process.env.Connect_Strings)
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Not Connected"));


