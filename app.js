const path = require("path");
const http = require("http");
const morgan = require("morgan");
const express = require("express");
const static = require("serve-static");

const app = express();
app.set("port", 5000);

app.use(morgan("dev"));

app.use(static(path.resolve(__dirname, "dist")));

app.get("/", (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, "dist", "index.html"))
);

http
  .createServer(app)
  .listen(app.get("port"), () =>
    console.log(`VueMarkdown - PORT ${app.get("port")}`)
  );
