const express = require('express');
const app = express();
const indexRouter = require("./src/routes/index.js");

app.listen('3000', ()=>{
    console.log("Servidor corriendo en el puerto: 3000")
});

app.use("/",indexRouter);