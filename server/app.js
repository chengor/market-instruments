const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const api = require('./src/routes');

const port = process.env.PORT || 3003;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/api', api);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})