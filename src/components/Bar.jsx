import React from 'react';
import Button from './Button';
import Input from './Input';
import {addToDo, changeInput} from '../pages/to-do-list/reducer'
import { useSelector, useDispatch } from 'react-redux';

const Bar = () => {
  const dispatch = useDispatch();
  const state= useSelector(state => state);

  const handleSubmit = () => {
    dispatch(addToDo({
      id: state.toDo.data.length + 1,
      text: state.toDo.input,
    }))  
  };

  const handlerOnKayDown = (e)=>{
    if(e.key === 'Enter') handleSubmit();
  };

  const handlerChangeInput = (e)=>{
    dispatch(changeInput(e.target.value))
  };
 
  return (
    <div >
      <Input
        onChange={handlerChangeInput}
        onKeyDown={handlerOnKayDown} 
        placeholder='Entry value' 
        value={state.toDo.input||''} 
        
      /> 
      <Button
        onClick={handleSubmit}
        type='block'
        label={'Add to list'}
        btnColor={'#39A2DB'}
        
      />
    </div>
  );
};

export default Bar; 