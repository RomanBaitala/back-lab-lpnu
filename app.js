const express = require('express');
const cors = require('cors')

const app = express();

const carsRouter = require('./routes/api/carRouter')
const userRouter = require('./routes/api/authRouter')
const cartRouter = require('./routes/api/userCartRouter')

app.use(cors())
app.use(express.json());
app.use('/api/cars', carsRouter)
app.use('/api/users', userRouter)
app.use('/api/cart', cartRouter)


module.exports = app;