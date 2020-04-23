import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
/*axios
      .get('/postagem')
      .then(resultado => {
        console.log(resultado)
      })
  }
no caminho/postagem do back para mostrar o que tem lá
*/
/*no package.json depois do scripts

endereço no backend onde está o projeto
Colocar "proxy": "http://localhost:3001/api",
*/

class App extends Component {
  constructor(props){
    super(props)

    axios
      .get('/postagem')
      .then(resultado => {
        console.log(resultado)
      })

      axios
      .get('/comentario/teste')
      .then(resultado => {
        console.log(resultado)
      })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          OLA <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
}
export default App;
