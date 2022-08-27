import React , {useState} from 'react';
import ToDoTub from './pages/to-do-list/index';
import WeatherTab from './pages/weather/index';
import clasess from './styles/App.module.css';


const App = () => {
const [activTab, setActivTab] = useState('tabToDo');

  const handleTabToDo=()=>{
    setActivTab('tabToDo')
  }
  const handleTabWeather=()=>{
    setActivTab('tabWeather')
  }
  return (
    <div className={clasess.App}>
      <div className={clasess.container}>
        <div>
          <ul className={clasess.nav}>
              <li
                className={activTab === "tabToDo" ? clasess.active : ""}
                onClick={handleTabToDo}
              >
              To Do App
              </li>
              <li
                className={activTab === "tabWeather" ? clasess.active : ""}
                onClick={handleTabWeather}
              >
              Weather App
              </li>
          </ul>
        </div>
       <div >
            {activTab === "tabToDo" 
            ?
            <ToDoTub/> 
            : 
            <WeatherTab/>
            }
        </div>
      </div>
    </div>
  );
}

export default (App);
