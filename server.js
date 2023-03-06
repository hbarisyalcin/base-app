const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
  console.log('>>> GET /');
  res.send('This is base app');
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
