const express = require("express");
const bParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3000;

const root = path.join(__dirname, "../client/dist");

const app = express();
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));

app.use("/", express.static(root));
app.get("*", (req, res) => res.sendFile("index.html", { root }));

app.listen(PORT, () => {
  console.log("server online:" + PORT);
});
