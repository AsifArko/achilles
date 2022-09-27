import express, { Express } from 'express';
import {initializeMongo} from "./connections/mongo/mongo";
import {initializeRoutes} from "./routes/router";

const cors = require('cors');

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({ 'Access-Control-Allow-Headers': 'Content-Type, Authorization' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
    return res.status(200).json({});
  }
  next();
});

// app.use((req, res, next) => {
//   const error = new Error(Message.NOT_FOUND);
//   return res
//     .status(404)
//     .json({ message: error.message });
// });

initializeMongo().then()
initializeRoutes(app)

export default app;
