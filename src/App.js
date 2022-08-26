import './App.css';
import React , {useState} from 'react';
import ToDoTub from './pages/to-do-list/index';
import WeatherTab from './pages/weather/index';




const App = () => {
const [activTab, setActivTab] = useState('tabToDo');

  const handleTabToDo=()=>{
    setActivTab('tabToDo')
  }
  const handleTabWeather=()=>{
    setActivTab('tabWeather')
  }
  return (
    <div className="App">
      <div className='container'>
        <div  className='navbar'>
          <ul className="nav">
              <li
                className={activTab === "tabToDo" ? "active" : ""}
                onClick={handleTabToDo}
              >
              To Do App
              </li>
              <li
                className={activTab === "tabWeather" ? "active" : ""}
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
