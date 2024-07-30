const express = require('express');
const cors = require('cors');
const app = express();
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User.js');
require('dotenv').config();

const bcryptSalt = bcrypt.getSalt(10);

app.use(express.json());



app.use(cors({
    credentials: true,
    origin: 'https://turbo-adventure-w6jr5qpvgxxf5qv6-5173.app.github.dev',
}));

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('test ok');
});

app.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    
    const userDoc = await User.create({
        name,
        email,
        password:bcrypt.hashSync(password, bcryptSalt),
    });

    res.json(userDoc);
});

app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
