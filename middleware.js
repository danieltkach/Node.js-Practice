const express = require("express");
const server = express();

function logger(req, res, next) {
    // console.log(`${req.method} ${req.path}`);
    console.log("baseUrl\n", req.baseUrl);
    console.log("body\n", req.body);
    console.log("cookies\n", req.cookies);
    console.log("fresh\n", req.fresh);
    console.log("hostname\n", req.hostname);
    console.log("ip\n", req.ip);
    console.log("ips\n", req.ips);
    console.log("method\n", req.method);
    console.log("originalUrl\n", req.originalUrl);
    console.log("params\n", req.params);
    console.log("path\n", req.path);
    console.log("protocol\n", req.protocol);
    console.log("query\n", req.query);
    console.log("route\n", req.route);
    console.log("secure\n", req.secure);
    console.log("signedCookies\n", req.signedCookies);
    console.log("stale\n", req.stale);
    console.log("subdomains\n", req.subdomains);
    console.log("xhr\n", req.xhr);
    next();
}

server.use(logger);

server.get("/", (req, res) => {
    res.status(200).send();
});

server.get("/r", (req, res) => {
    res.redirect("https://www.nodejs.org");
});

server.listen(3000, () => { console.log('Listening...'); });
