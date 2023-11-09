require('dotenv').config()
const express = require("express")
const jwt = require('jsonwebtoken');
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Add this middleware to parse JSON requests
app.use(express.json());

const posts = [
    {
        username: "Israt",
        Title: 'post 1'
    },
    {
        username: "Raian",
        Title: 'post 2'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
