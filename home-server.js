const express = require("express");
const morgan = require("morgan");

const server = express();
const port = 80;

server.use(morgan());

server.get("/", (req, res) => {
    // res.send("Hello! This is Code Witcher's server.");
    res.redirect("https://www.minecraft.net/");
});

server.get("/pato", (req, res) => {
    res.send("Gracias por visitar el servidor de patos.");
});

server.listen(port, () => {
    console.log("Server listening...");
});
