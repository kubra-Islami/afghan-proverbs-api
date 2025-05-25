import express from 'express';
import morgan from 'morgan';
import routes from './src/routes/routes.js';
import cors from 'cors'; // use ES module syntax for consistency

const app = express();
const PORT = process.env.PORT || 3000;

// CORS options (optional: restrict to frontend origin)
const corsOptions = {
    origin: 'http://localhost:5173', // or '*' for development
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware for preflight requests
app.options('*', cors(corsOptions));

// Logging and body parsing
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/proverbs', routes);

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
