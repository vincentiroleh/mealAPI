import express from "express";
import meals from "./utils/db";
import bodyParser from "body-parser";
import mealRouter from './routes/meals.route';



// setup express app
const app = express();

// Setup body-parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res)=> res.send({
	status: 'true',
	message: 'Api working perfectly'
}));

// Make use of router middleware handler
app.use('/api/v1/meals', mealRouter);



// Port and sever to listen on
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});