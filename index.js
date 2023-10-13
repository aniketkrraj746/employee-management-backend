const express = require("express");
require("dotenv").config();
const dbConnect = require("./config/database");
const userRoutes = require("./routes/user");
const app = express();
var cors = require("cors");
const path = require("path")
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "*",
  })
);
// Middleware
app.use(express.json());

app.use("", userRoutes); 

// static files
app.use(express.static(path.join(__dirname,"../frontend/build")))
app.get((req, res) => {
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"))
});

// CORS Configuration
app.listen(PORT, () => {
  console.log(`THE SERVER IS UP AND RUNNING AT PORT ${PORT}`);
});

dbConnect();

app.get("/", (req, res) => {
  res.send(`<h1>Backend is Running and this is '/' Ro ute</h1>`);
});
app.get("/abcd",(req,res)=>{
  res.send(`<p>aniket</p>`);
});
