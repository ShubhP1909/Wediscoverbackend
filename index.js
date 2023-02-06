const express = require("express");
const bodyParser = require("body-parser");
const api = require('./router/api');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', api);


app.get('/', (req, res) => {
    res.send("New Year 2023");
})

app.use(express.static(path.join(__dirname, "/fronted/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/fronted/build', 'index.html'));
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server start on port ${port}`));