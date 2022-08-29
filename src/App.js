import React  from 'react';
import clasess from './styles/App.module.css';
import Navbar from './components/Navbar';
import Routes from './routes'


const App = () => {

  return (
    <div className={clasess.App}>
      <div className={clasess.container}>
        <Navbar />
        {Routes}
      </div>
    </div>
  );
}

export default (App);
