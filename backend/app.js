const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

// DB
mongoose
  .connect(
    "mongodb+srv://Jason:Jason870214@cluster0-qmftr.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  )
  .then(() => console.log("connected"))
  .catch(err => console.log(err));

//Bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//express-session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

//Router
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

const PORT = 8000;

app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
