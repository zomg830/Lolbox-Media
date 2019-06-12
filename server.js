require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const enforce = require("express-sslify");
const compression = require("compression");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(morgan("combined"));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());
app.use(enforce.HTTPS());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/lolbox", {
  dbName: "lolbox",
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
