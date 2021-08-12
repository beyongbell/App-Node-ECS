const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World Aws Ecs Go Go Go');
})

app.post('/login',function(req,res) {
    let user_name = req.body.username;
    let password = req.body.password;
    res.status(200).json({ username: user_name, password: password });
});

app.listen(80);