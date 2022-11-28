const express = require('express');
const app = express();
const port = 3000;

const goodsRouter = require('./routes/goods.js')
const connect = require("./schemas");
connect();

app.use(express.json());

const cartsRouter = require("./routes/carts");

app.use("/api", [goodsRouter, cartsRouter]);


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});