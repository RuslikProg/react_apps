import React, {useEffect, useState} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import classes from '../../styles/Weather.module.css';
import Icon from '../../components/Icon'
import { useDispatch, useSelector } from 'react-redux';
import {getWeather} from './weatherThunk'

const Weather = () => {
  const [locations, setLocations] = useState('vyshneve');
  
  const handlerOnKayDown = (e)=>{
    if(e.key === 'Enter') getData();
  }


  // ------------------------------
  const dispatch = useDispatch()
  const {data} = useSelector((state) => state.weatherApp)

  useEffect(() => {
    getData()
  }, [])

 
  
  const getData = ()=>{
    dispatch(getWeather(locations))
  }
  // -------------------


return(
  <div className='App'>
      <div className="search">
        <Input
          onKeyDown={handlerOnKayDown} 
          value={locations}
          placeholder='Insert the City'
          onChange={(e) => setLocations(e.target.value)}
        />
        <Button
          label={'Choise the City'}
          onClick={getData}
          type='block'
          btnColor={'#39A2DB'}
        />
      </div>
      <div className="app_data">

        <h2>{data?.name}</h2>
        <p>
          <Icon
          className={classes.span_x}
          icon='termostat'
          color='red'
          sire={24}
          />Current Temperature : 
          {data?.main?.temp}
          C
        </p>
        <p>
        <Icon
          
          icon='drop'
          color='blue'
          sire={24}
          /> Humidity is :
          {data?.main?.humidity}
          %
        </p>
        <p>
        <Icon
          
          icon='clouds'
          color='gray'
          sire={24}
          /> Cloudiness is :
          {data?.clouds?.all}
          %
        </p>
        <p>
        <Icon
          
          icon='sunny'
          color='ellow'
          sire={24}
          /> Sunrise :
          {new Date(data?.sys?.sunrise * 1000 ).toLocaleString()}
        </p>
        <p>
        <Icon
          icon='twilighth'
          color='black'
          sire={24}
          /> Sunset :
          {new Date(data?.sys?.sunset * 1000 ).toLocaleString()}
        </p>
      </div>
  </div>
)
}

export default Weather;