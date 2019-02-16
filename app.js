import express from "express";
import meals from "./db/db";
import bodyParser from "body-parser";
import router from './routes/meals.route';



// setup express app
const app = express();

// Setup body-parser middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Make use of router middleware
app.use(router);



// Port and sever to listen on
const PORT = 6000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});