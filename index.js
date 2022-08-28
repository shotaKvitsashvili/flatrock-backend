const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const mongoose = require('mongoose');
const path = require('path')


require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const routes = require('./routes');
const port = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, function () {
            console.log('working');
        });
    })
    .catch(err => console.error(err));


app.use(bodyParser.urlencoded({ extended: true, limit: '20mb', parameterLimit: 100000, }))
app.use(express.json({ limit: '1mb' }))

let root = path.join(__dirname, '..', 'build/')
app.use(express.static(root))

app.use(cors())
app.use('/api', routes)
