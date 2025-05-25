import express from 'express';
import morgan from "morgan";
import routes from "./src/routes/routes.js";
const cors = require('cors');


// init express app
const app = express();
const PORT = process.env.PORT || 3000;

// allows cross-origin requests
app.use(cors());


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.use("/proverbs",routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
