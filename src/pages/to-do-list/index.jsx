import React  from 'react';
import Bar from '../../components/Bar';
import Text from '../../components/Text';
import List from '../../components/List';
import classes from '../../styles/App.module.css';
import { useSelector, useDispatch } from 'react-redux';




const ToDo = () => {
  const dispatch = useDispatch();
  const state= useSelector(state => state);

  return (
    <div className={classes.App} style={{textAlign:'center'}}>
        <div className={classes.input_form} >
            <Bar
              state={state}
              dispatch={dispatch}
            />
        </div>
      <div className={classes.result} >
        <Text
          text={"To Do list"}
        />
        <List
          state={state}
          dispatch={dispatch}
          classes={classes}
        />
        
      </div>

    </div>
  );
}

export default (ToDo);
