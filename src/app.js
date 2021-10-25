const expresse = require("express");

const app = expresse();

const routes = require("./routes");

require("./database");

const cors = require("cors");



// app.use("/uploads", expresse.static("uploads"));


app.use(cors())

app.use(expresse.json());

app.use(routes);

module.exports = app;
