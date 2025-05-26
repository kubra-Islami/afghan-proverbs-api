import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import corsOptions from './src/routes/corsOptions.js';
import routes from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;


// Use CORS middleware
app.use(cors(corsOptions));

// Logging and body parsing
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/proverbs', routes);

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

