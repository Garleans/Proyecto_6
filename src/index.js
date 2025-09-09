require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./config/db');

const userRouter = require('./routes/user.routes');
const bookRouter = require('./routes/book.routes');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

const allowedOrigins = [
    'https://ejemplo-random.app',
];

//middlewares
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);

        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("No permitido por CORS"));
        }
    },
    credentials: true
}));

app.use(express.json());

app.use('/api/v1/users', userRouter); // localhost:3000/api/v1/users
app.use('/api/v1/books', bookRouter); // localhost:3000/api/v1/books

app.listen(PORT, () => {
    console.log('servidor corriendo en el puerto: ', PORT);
})