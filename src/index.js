const express = require("express");
const app = express();

const PORT = 3000;

const userRouter = require('./routes/users')

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', userRouter);

function onStart() {
    console.log(`Server Running on port: ${PORT}`);
}

app.listen(PORT, onStart);

module.exports = app;