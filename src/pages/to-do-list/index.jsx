import '../../App.css';
import React , {useReducer} from 'react';
import Bar from '../../components/Bar';
import Text from '../../components/Text';
import List from '../../components/List';
import classes from '../../styles/App.module.css';
import { useSelector, useDispatch } from 'react-redux';



const key = 'toDoList';
const getToDo = JSON.parse(localStorage.getItem(key)) || [];
const initialState = {
  input:'',
  data: getToDo,
};

function reducer(state, action) {
  switch (action.type) {
    case 'onChangeInput':
      return {
        ...state,
        input: action.data,
      };
    case 'addToDo':
      return {
        input: '',
        data: action.data,
      };
    case 'deleteToDo':
        return {
          ...state,
          data: action.data,
        };
    default:
      throw new Error();
  }
}

const ToDo = () => {
  const dispatch1 = useDispatch();
  const state1 = useSelector(state => state);
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state',state1)


  return (
    <div className="App" style={{textAlign:'center'}}>
        <div className={classes.input_form} >
            <Bar
              state={state}
              dispatch={dispatch}
            />
        </div>
      <div className='result' >
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
