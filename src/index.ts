import express from 'express';
/*
import usersRouter from './routes/users.router';
import loginRouter from './routes/login.router';
import booksRouter from './routes/books.router';
import commentsRouter from './routes/comments.router';
import cartsRouter from './routes/carts.router';
*/
import statisticRouter from './routes/statistic.router';

const app = express();
const port = 7511; // default port to listen
const dotenv = require('dotenv')


dotenv.config()

// middleware used to parse incoming requests with JSON payloads
app.use(express.json())

app.use('/stat',statisticRouter)
/*

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/books', booksRouter)
app.use('/api/comments', commentsRouter)
app.use('/api/carts', cartsRouter)

*/

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
