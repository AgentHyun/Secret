const express = require('express');
const app=express();
app.use(express.urlencoded({extended: true}));
const port = 5000
const {User} = require("./models/Models/User");
const config = require("./config/key");

const mongoose = require('mongoose')

mongoose.connect(config.mongoURI)
.then(()=>console.log(('mongo Success')))
.catch(err => console.log(err))

app.get('/', (req,res) => res.send("hello world it is nice day"))
app.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        const userInfo = await user.save();
        return res.status(200).json({ success: true });
    } catch (err) {
        return res.json({ success: false, error: err.message });
    }
});


app.listen(port, ()=> console.log('Example app listen'))