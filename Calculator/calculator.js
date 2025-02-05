const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) => {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result)
})
app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmicalculator.html")
})
app.post("/bmicalculator", (req, res) => {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var resultBMI = Math.floor(weight / (height*height));
    res.send("The result of the calculation is " + resultBMI)
})
app.listen(3000, () => console.log("the server is running on port 3000"))