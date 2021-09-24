import { useState } from 'react';
import '../styles/App.scss';
import dataList from './data.json';

const App = () => {
  const [data, setData] = useState(dataList);

  /*const renderClubs = () => {
    return(
      dataList.map((data,index)=>{
        return(
          <li className="main__list--item" key={index}>
            <h2>#0: Book club</h2>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
        );
      )}
    );
  }*/
  return (
    <div className="App">
      <header className="header">
        <h1>Mis clubs</h1>
      </header>
      <main>
        <ul className="main__list">
          <li className="main__list--item">
            <h2>#0: Book club</h2>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
          <li className="main__list--item">
            <h2>#0: Book club</h2>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
          <li className="main__list--item">
            <h2>#0: Book club</h2>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
          <li className="main__list--item">
            <h2>#0: Book club</h2>
            <p>Abierto entre semana: Sí</p>
            <p>Abierto el fin de semana: Sí</p>
          </li>
        </ul>
        <h3>Añadir un nuevo club</h3>
        <form action="" className="form">
          <label htmlFor="add-club">Nombre del club</label>
          <input name="add-club" type="text" value="var" />
          <label for="daily">
            <input id="" type="checkbox" value="" name="daily" />
            ¿Abre entre semana?
          </label>
          <label for="weekend">
            <input id="" type="checkbox" value="" name="weekend" />
            ¿Abre los fines de semana?
          </label>
          <button>Añadir un nuevo club</button>
        </form>
      </main>
    </div>
  );
};
export default App;
