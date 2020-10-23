const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

app.use(cors());
app.use('/chart', api);
app.get('/', (req, res) => {
  res.send('HELLO MUSIC CHART!!!');
});
const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Linstening on port ${port}`));
