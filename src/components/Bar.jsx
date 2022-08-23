import React from 'react';
import Button from './Button';
import Input from './Input';


const Bar = ({state, dispatch,}) => {

  const onSubmit = (e) => {
    dispatch({
        type: 'addToDo',
        data:[
            ...state.data,
            {id:state.data.length + 1, data: state.input}
        ]
      })
    try {
        localStorage.setItem('toDoList', JSON.stringify([...state.data, {id:state.data.length + 1, data: state.input}]));
    }catch (error) {
        console.log(error)
    }
};

  const handlerOnKayDown = (e)=>{
    if(e.key === 'Enter') onSubmit();
  }

  const handlerChangeInput = (e)=>{
    dispatch({type: 'onChangeInput', data: e.target.value})
  }

  return (
    <div style={{
      display: 'flex',
      width: '100%'
    }}>
      <Input
        onChange={handlerChangeInput}
        onKeyDown={handlerOnKayDown} 
        placeholder='Entry value' 
        value={state.input||''} 
        
      /> 
      <Button
        onClick={onSubmit}
        type='outline'
        label={'Add to list'}
        
      />
    </div>
  )
}

export default Bar 