const express = require("express");
const fetch = require("node-fetch");
const app = express();

const API_KEY = "0007a412af08ba7996eca78527cbadb8";

app.use(express.static("public"));

app.get("/weather/:city", async (req, res) => {
    const city = req.params.city;

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.json({ error: "Error fetching weather data" });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
