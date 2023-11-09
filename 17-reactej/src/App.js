import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function getUser() {

  const user = axios.get('https://mercadolibre.com.ar/users/product/id=?zapatillas');

  return produc;
  
}

function getUser() {

  const user = axios.get('https://bna.com.ar/users/product/id=?zapatillas');

  const otro = fetch('https://bna.com.ar/users/product/id=?zapatillas')

  return produc;
  
}

function postUser(datos) {

  const user = axios.post('https://render.pbernal/users/', datos);

  return user;
  
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        getUser().then((res) => {
          console.log(user.nombre)
        }).catch((err) => {
          console.log(err)
        });

        in value nombre

        datos = {
          nombre: nombre
        }

        postUser(datos)
        <h2>Aprendiendo de React </h2>


      </header>
    </div>
  );
}

export default App;
