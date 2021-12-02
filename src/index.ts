import express from 'express';
import statisticRouter from './routes/statistic.router';

const app = express();
const port = 3000; // default port to listen
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()

// middleware used to parse incoming requests with JSON payloads
app.use(express.json())

// CORS
app.use(cors())

// API Routes
app.use('/api/stat', statisticRouter)

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
