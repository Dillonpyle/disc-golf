const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');

require('./db/db');

app.use(session({
    secret: 'silence, my brother',
    resave: false,
    saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
    orgin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions));

const login = require('./controllers/login');
const user = require('./controllers/users');

app.use('/api/v1/users', user);
app.use('/login', login);

app.listen(process.env.PORT || 9000, () => {
    console.log('listening on port 9000');
});