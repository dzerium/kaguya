const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const createRouter = require("./routes");

const PORT = process.env.APP_PORT || "8000";

if (dotenv.error) {
  throw dotenv.error;
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  if (err) {
    res.status(400).send({ error: "Json parse error" });
  } else {
    next();
  }
});

app.use("/api", createRouter());

app.listen(PORT, () => console.log(`App running in port: ${PORT}`));
