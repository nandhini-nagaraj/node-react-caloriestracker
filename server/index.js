const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// let storedData = [];
// app.post('/api/sendData', (req, res) => {
//   //  console.log(req.body);
//     storedData = req.body.data;
//     console.log('Received data:', storedData);
//     res.json({ message: 'Data received successfully.' });
// });
//
// app.get('/api/fetchData', (req, res) => {
//     res.json({ data: storedData });
// });
//
// app.listen(PORT, () => {
//     console.log(`Server listening on ${PORT}`);
// });
//
// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 5000;
//
// app.use(bodyParser.json());
// let storedData = [];
let storedData = [];

app.post('/api/sendData', (req, res) => {
    storedData.push(req.body.data);
    console.log('Received data:', storedData);
    res.json({ message: 'Data received successfully.' });
});

app.get('/api/fetchData', (req, res) => {
    res.json({ data: storedData });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
