const express = require('express');
const ejs = require('ejs');
const path = require('path');

const validation = require('./src/Middlewares/validationMiddleware');
const userSchema = require('./src/validations/userValidation');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) =>{
    res.render('index')
});

app.post('/login', validation(userSchema), (req, res) =>{
    res.status(200).send(req.body)
});


app.listen(3000, (req, res) =>{
    console.log('server up!')
});