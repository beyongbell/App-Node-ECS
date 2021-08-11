const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Aws');
})

app.listen(80);