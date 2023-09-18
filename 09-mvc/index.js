const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cors = require('cors');
const usersRoutes = require('./routes/usersRoutes');
const productsRouters = require('./routes/productsRouters');
const app = express();
dotenv.config();

const PORT = process.env.PORT ?? 9000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

//leemos las rutas como un middelware
app.use('/users', usersRoutes);
app.use('/products', productsRouters);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.listen(PORT, (err) => {
    if(err) {throw err}
    console.log(`Server running on port http://localhost:${PORT}`);
});
