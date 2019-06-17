require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const enforce = require("express-sslify");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const {
  PORT = 3001,
  NODE_ENV,
  MONGODB_URI,
  MONGODB_PORT,
  MONGODB_DB,
  MONGODB_HOSTNAME
} = process.env;

const dbOptions = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
  dbName: "lolbox"
};

const url = `mongodb://${MONGODB_HOSTNAME}:${MONGODB_PORT}/${MONGODB_DB}?authSource=admin`;

app.use(morgan("combined"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
if (NODE_ENV === "production") {
  app.use(enforce.HTTPS());
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(MONGODB_URI || url, dbOptions);

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
