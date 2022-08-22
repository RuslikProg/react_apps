
import './App.css';
import React , {useReducer} from 'react';
import classes from './App.module.css'
import Bar from './components/Bar';
import Text from './components/Text';
import List from './components/List';


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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <div className="App">
        <div className={classes.input_form} >
            <Bar
              state={state}
              dispatch={dispatch}
            />
        </div>
      <div className='result' style={{background: '#ffc107'}}>
        <Text
          text={"ToDo list"}
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

export default App;
