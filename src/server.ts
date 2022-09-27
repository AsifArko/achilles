import app from "./app";
import * as dotenv from 'dotenv';

dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT;

const server = app.listen(port, () => {
  console.log(`server is running on http://${host}:${port}`);
});

export default server;