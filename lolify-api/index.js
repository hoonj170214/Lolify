const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'hello lolify' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`${port} 번 포트에서 대기중`);
});
