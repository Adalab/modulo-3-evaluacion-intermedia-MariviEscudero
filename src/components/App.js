import { useState } from 'react';
import '../styles/App.scss';
import dataList from '../services/data.json';

const App = () => {
  const [data, setData] = useState(dataList);
  const [clubName, setClubName] = useState('');
  const [openWeek, setOpenWeek] = useState(false);
  const [openWeekend, setOpenWeekend] = useState(false);
  const [filterClub, setFilterClub] = useState();
  const [removeClub, setRemoveClub] = useState([]);

  const handleFilterClub = (ev) => {
    setFilterClub(ev.target.value);
  };

  const handleClubName = (ev) => {
    setClubName(ev.target.value);
  };
  const handleOpenWeek = (ev) => {
    setOpenWeek(ev.target.checked);
  };
  const handleOpenWeekend = (ev) => {
    setOpenWeekend(ev.target.checked);
  };
 
  const handleRemoveClub = (ev) => {
    setRemoveClub(ev.target.id);
    data.splice(removeClub, 1);
    setData([...data]);
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    setClubName('');
    setOpenWeekend(false);
    setOpenWeek(false);
    const newClub = {
      name: clubName,
      openOnWeekdays: openWeek,
      openOnWeekend: openWeekend,
    };
    setData([...data, newClub]);
  };

  const renderClubs = () => {
    return data
      .filter((data) => {
        if (filterClub === 'semana') {
          return data.openOnWeekdays === true;
        } else if (filterClub === 'finde') {
          return data.openOnWeekend === true;
        } else {
          return data;
        }
      })
      .map((data, index) => {
        return (
          <li className="main__list--item" key={index}>
            <h2>{`#${index}: ${data.name} `}</h2>
            <i
              id={index}
              className="fas fa-times-circle"
              onClick={handleRemoveClub}
            ></i>
            <p>{`Abierto entre semana: ${
              data.openOnWeekdays ? 'Sí' : 'No'
            }`}</p>
            <p>{`Abierto el fin de semana: ${
              data.openOnWeekend ? 'Sí' : 'No'
            }`}</p>
          </li>
        );
      });
  };

 

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__title">Mis clubs</h1>
        <form action="">
          <label htmlFor="filterclub">Mostrar</label>
          <select
            id="club"
            name="filterclub"
            value={filterClub}
            onChange={handleFilterClub}
          >
            <option value="todos">Todos</option>
            <option value="semana">Los que abren entre semana</option>
            <option value="finde">Los que abren el fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul className="main__list">{renderClubs()}</ul>
        <h3 className="main__title">Añadir un nuevo club</h3>
        <form action="" className="form">
          <div className="label__format">
            <label className="label" htmlFor="add-club">
              Nombre del club
            </label>
            <input
              className="input"
              name="add-club"
              type="text"
              value={clubName}
              onChange={handleClubName}
            />
          </div>
          <div className="label__format">
            <label className="label" htmlFor="daily">
              <input
                className="input"
                value="daily"
                id="daily"
                type="checkbox"
                name="daily"
                checked={openWeek}
                onChange={handleOpenWeek}
              />
              ¿Abre entre semana?
            </label>
          </div>
          <div className="label__format">
            <label className="label" htmlFor="weekend">
              <input
                className="input"
                value="weekend"
                id="weekend"
                type="checkbox"
                name="weekend"
                checked={openWeekend}
                onChange={handleOpenWeekend}
              />
              ¿Abre los fines de semana?
            </label>
          </div>
          <button className="form__btn" onClick={handleClick}>
            Añadir un nuevo club
          </button>
        </form>
      </main>
    </div>
  );
};
export default App;
