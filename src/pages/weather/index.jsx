import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import classes from '../../styles/Weather.module.css';
import Icon from '../../components/Icon'


const Weather = ({text,type, placeholder, value, onChange, onClick}) => {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState('london');
  
  const handlerOnKayDown = (e)=>{
    if(e.key === 'Enter') ifClicked();
  }


  useEffect(() => {
    ifClicked();
  }, []);
  
  const ifClicked = ()=>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=79e448778c9f901dc253ae9c6a505abb&units=metric`
    )
      .then((res) => {
        console.log(res)
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));

  }

return(
  <div className='App'>
      <div className="search">
        <Input
          onKeyDown={handlerOnKayDown} 
          value={locations}
          placeholder='Insert the location'
          onChange={(e) => setLocations(e.target.value)}
        />
        <Button
          label={'Choise the City'}
          onClick={ifClicked}
          type='block'
          btnColor={'#39A2DB'}
        />
      </div>
      <div className="app_data">

        <h2>{weather?.name}</h2>
        <p>
          <Icon
          className={classes.span_x}
          icon='termostat'
          color='gray'
          sire={24}
          />Current Temperature : 
          {weather?.main?.temp}
          C
        </p>
        <p>
        <Icon
          
          icon='drop'
          color='gray'
          sire={24}
          /> Humidity is :
          {weather?.main?.humidity}
          %
        </p>
        <p>
        <Icon
          
          icon='clouds'
          color='gray'
          sire={24}
          /> Cloudiness is :
          {weather?.clouds?.all}
          %
        </p>
        <p>
        <Icon
          
          icon='sunny'
          color='gray'
          sire={24}
          /> Sunrise :
          {new Date(weather?.sys?.sunrise * 1000 ).toLocaleString()}
          
        </p>
        <p>
        <Icon
          
          icon='twilighth'
          color='gray'
          sire={24}
          /> Sunset :
          {new Date(weather?.sys?.sunset * 1000 ).toLocaleString()}
          
        </p>
        
    
      </div>
  </div>
)
}

export default Weather;