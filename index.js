const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Aws Ecs');
})

app.listen(80);