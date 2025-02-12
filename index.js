const express = require("express");
const app = express();

let port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram", {username});
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});