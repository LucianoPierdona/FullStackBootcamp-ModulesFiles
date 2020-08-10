const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static("public"));
app.get("/", (req, res) => {
    const day = date();
    res.render("list", { listTitle: day, newListItems: items });
})
app.post("/", (req, res) => {
    const item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})
app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work List", newListItems: workItems})
})
app.listen(3000, () => {
    console.log("server started on port 3000");
})