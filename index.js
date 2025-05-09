import express from 'express';
import morgan from "morgan";
import routes from "./src/routes/routes.js";


// init express app
const app = express();
const PORT = 3003;


// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/proverbs",routes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
