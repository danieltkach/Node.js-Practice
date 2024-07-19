const express = require('express');
const app = express();

const morgan = require("morgan");
app.use(morgan());

app.get("/", (req, res) => {
    // res.send("Eleonora del Pilar Feijoo, 10/03/1979");
    // res.redirect("http://www.sillyfarm.com");
    res.send("Hey, welcome to Code Witcher's API.");
});


app.listen(80, () => {
    console.log("Servidor corriendo...");
});
