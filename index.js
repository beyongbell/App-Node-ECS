const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World Aws Ecs Go Go Go');
})

app.post('/', (req, res) => {
    const {username, password} = req.body;
    res.send(`Hello ${username} ${password}`);
})

app.listen(80);