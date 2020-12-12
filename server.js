const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const knex = require('knex');
const getAllTeachers = require('./controllers/getAllTeachers');

const app = express();

const db = knex( {
    client: 'pg',
    connection: { 
    connectionString : process.env.DATABASE_URL, 
    ssl: { rejectUnauthorized: false } }
  
} );




app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>  {res.send('it is working')});


app.get('/getAllTeachers', getAllTeachers.handlegetAllTeachers(db));


app.listen(process.env.PORT || 3000, () => {
	console.log(`app server is running on port 3000 ${process.env.PORT}`);
}); 