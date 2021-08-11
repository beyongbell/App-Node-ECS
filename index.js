const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Aws Ecs Go Go Go');
})

app.listen(80);