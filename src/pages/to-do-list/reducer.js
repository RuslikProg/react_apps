import { createSlice } from '@reduxjs/toolkit';

const key = 'toDoList';
const initialState = {
  input: '',
  data: JSON.parse(localStorage.getItem(key)) || [],
};

export const toDoSlice = createSlice({
  name: 'toDo',
  initialState: initialState,
  reducers: {
    changeInput: (state, action)=>{
      return {
        ...state,
        input : action.payload
      }
    },
    addToDo:(state, action)=>{
      localStorage.setItem(key, JSON.stringify([...state.data, {id:state.data.length + 1, text: state.input}]));
      return{
        ...state,
        data: [
          ...state.data,
          action.payload
        ],
        input: '',
      }
    },
    deleteToDo:(state, action)=>{
      localStorage.setItem(key, JSON.stringify([...state.data.filter( item => item.id !== action.payload) || []]));
      return{
        data: [...state.data.filter( item => item.id !== action.payload)]
      }
    }
  },
});


export const { changeInput, deleteToDo, addToDo  } = toDoSlice.actions;
export default toDoSlice.reducer;