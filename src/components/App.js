import { useState } from 'react';
import '../styles/App.scss';
import dataList from './data.json';

const App = () => {
  const [data, setData] = useState(dataList);
  const [clubName,setClubName] = useState('');
  const [openWeek, setOpenWeek] = useState(false);
  const [openWeekend, setOpenWeekend] = useState(false);

  const handleClubName = (ev) =>{
    setClubName(ev.target.value);
  }
  const handleOpenWeek = (ev) =>{
    setOpenWeek(ev.target.checked);
  }
  const handleOpenWeekend = (ev) =>{
    setOpenWeekend(ev.target.checked);
  }
  

  const renderClubs = () => {
    return(
      data
      /*.filter(() =>{
        return(

        )
      })*/
      .map((data,index)=>{
        return(
          <li className="main__list--item" key={index}>
            <h2>{`#${index}: ${data.name}`}</h2>
            <p>{`Abierto entre semana: ${data.openOnWeekdays===true ?'Sí':'No'}`}</p>
            <p>{`Abierto el fin de semana: ${data.openOnWeekend===true ?'Sí':'No'}`}</p>
          </li>
        );
      })
    );
  }
  return (
    <div className="App">
      <header className="header">
        <h1>Mis clubs</h1>
      </header>
      <main>
        <ul className="main__list">
         {renderClubs()}
        </ul>
        <h3>Añadir un nuevo club</h3>
        <form action="" className="form">
          <label htmlFor="add-club">Nombre del club</label>
          <input name="add-club" type="text" value={clubName} onChange={handleClubName} />
          <label htmlFor="daily">
            <input id="" type="checkbox" name="daily" onChange={handleOpenWeek}/>
            ¿Abre entre semana?
          </label>
          <label htmlFor="weekend">
            <input id="" type="checkbox" name="weekend" onChange={handleOpenWeekend}/>
            ¿Abre los fines de semana?
          </label>
          <button>Añadir un nuevo club</button>
        </form>
      </main>
    </div>
  );
};
export default App;
