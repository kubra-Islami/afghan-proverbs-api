const corsOptions = {
    origin: [
        'http://localhost:5173',
        'https://afghan-proverbs-front-1.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

export default corsOptions;
