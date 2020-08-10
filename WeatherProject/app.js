const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const { response } = require("express");
const { resolveSoa } = require("dns");
const app = express();
app.use(bodyParser.urlencoded({extented: true}));
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})
app.post("/", (req, res) => {
    const query = req.body.cityName;
    const apiKey = "39b661b4a3ff7f655d008ebbc4054eb5";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&units=" + unit + "&appid=" + apiKey;
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            res.send("<p>The Weather is currently " + weatherDescription + "</p><br>" + "<h1>The Temperature in " + query + " is " + temp + " degrees Celcius.</h1><br>" + "<img src=" + imageURL + ">");
        })
    })
})
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
})
