const express = require("express");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("./routes");

const PORT = process.env.APP_PORT || "8000";

if (dotenv.error) {
  throw dotenv.error;
}

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", router());

app.listen(PORT, () => console.log(`App running in port: ${PORT}`));
