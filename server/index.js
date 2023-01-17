const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
app.use(cors());
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('Hello world');
});

const PORT = 8000;

server.listen(PORT, () => `Server is running on port ${PORT}`);