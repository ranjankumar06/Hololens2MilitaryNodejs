const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Router/userRouter");
const cors = require("cors");

const app = express();
require("./configs/dbconfig");
const prefix = "/infosys/holo"
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use(prefix + "/player", userRouter);


app.get(prefix + "/", (req, res) => {
  res.send("Welcome hololens");
});

app.listen(3020, (err) => {
  if (err) console.log(err);
  else console.log("server running on 3020");
});
