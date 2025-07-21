//
// const corsOptions = {
//     origin: ['http://localhost:5173', 'https://afghan-proverbs-api-kysw.onrender.com'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     // allowedHeaders: ['Content-Type', 'Authorization'],
//     allowedHeaders: ['Content-Type'],
// };
// export default corsOptions;

const corsOptions = {
    origin: [
        'http://localhost:5173',  // dev frontend
        'https://afghan-proverbs-front-1.onrender.com'  // deployed frontend
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], // optional if you use auth tokens
};

export default corsOptions;

