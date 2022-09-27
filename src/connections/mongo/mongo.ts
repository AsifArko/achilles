import * as dotenv from 'dotenv';

const mongoose = require('mongoose');

dotenv.config();

const debug = process.env.MONGO_DEBUG;
const uri = process.env.MONGO_URI;

export const initializeMongo = async () => {
  mongoose.set('debug', true);
  await mongoose.connect('mongodb://localhost:27017/achilles')
    .then(() => {
      console.log('Mongo connection established successfully');
    })
    .catch((err: Error) => {
      console.log(`Failed to establish mongo connection`);
    });
}