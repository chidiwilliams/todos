const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const todos = require('./routes/todos');

const app = express();

app.use(bodyParser.json());

app.use('/todos', todos);

app.listen(process.env.SERVER_PORT, () => {
  console.log(process.env.MONGO_URL);
  console.log(`App listening on port ${process.env.SERVER_PORT}`);
});
