import mongoose from "mongoose";

mongoose.connect("mongodb+srv://vyoda4604:<senha>@cluster0.x7cvqhp.mongodb.net/node-express");

let db = mongoose.connection;

export default db;
