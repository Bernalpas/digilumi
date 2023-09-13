const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const app = express();
dotenv.config();

const PORT = process.env.PORT ?? 8080;

let corsOptions = {
    "origin": 'http://localhost:3000',
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE" // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));

//app.use(express.static('public'));


app.get('/', (req, res) => {

    console.log('=========================');
    console.log(__dirname);
    console.log('=========================');
    console.log(__filename);
    console.log('=========================');
    console.log(__dirname + '/public/index.html');
    console.log('=========================');
    console.log(path.join(__dirname, 'public'));
    console.log('=========================');

    //res.sendFile(__dirname + '/public/index.html');
    res.sendFile('index.html');
    
});

//POST
app.post('/', (req, res) => {
    
    const { user, password } = req.body;

    let userData = 'Pepe';
    let passData = '1234';

    console.log('=========================');
    console.log(`Los datos recibidos son: ${user} y ${password}`);
    console.log('=========================');

    //res.status(200).send('Tus Datos han sido recibidos')

    if(user == '' || password == ''){
        res.redirect('/error.html');
    }else if(user == userData && password == passData){
        res.redirect('/admin.html');
    }else if(user != userData && password != passData){
        res.redirect('/error.html');
    }

});


app.listen(PORT, (err) => {
    if(err) {throw err}
    console.log(`Server running on port http://localhost:${PORT}`);
});

/* Glitch
{ PORT: process.env.PORT },
    function (err, address) {
        if (err) {
            console.error(err);
            process.exit(1);
        }
    console.log(`Your app is listening on ${address}`);
}
*/

//path 
// /users/login
// /users/delete
// /mirutaparaborrardatos/algo
// /otraruta/numero
