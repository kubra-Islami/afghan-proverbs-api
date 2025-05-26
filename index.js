import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import routes from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// CORS options (optional: restrict to frontend origin)
const corsOptions = {
    origin: ['http://localhost:5173', 'https://afghan-proverbs-api-kysw.onrender.com',"*"],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors({ origin: '*' }));

// Use CORS middleware
app.use(cors(corsOptions));

// Middleware for preflight requests
app.options('*', cors(corsOptions));



// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//
//     if (req.method === 'OPTIONS') {
//         return res.sendStatus(204);
//     }
//
//     next();
// });


// Logging and body parsing
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/proverbs', routes);

// Start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

