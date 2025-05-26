
const corsOptions = {
    origin: ['http://localhost:5173', 'https://afghan-proverbs-api-kysw.onrender.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    allowedHeaders: ['Content-Type'],
};
export default corsOptions;
