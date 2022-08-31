import React from 'react';
import Icon from './Icon';
import Text from './Text';
import {deleteToDo} from '../pages/to-do-list/reducer';
import classes from '../styles/List.module.css'

const List = ({state,dispatch}) => {

  const deletePost = (e)=>{
    dispatch(deleteToDo(+e.target.id));
  }

  return (
  <div>
    {!!state.toDo.data.length ? 
      <div  className={classes.posts_wraper} >
        {state.toDo.data.map((post, index)=>{
          return  <div className={classes.post_item} key={index}>
            <div>{post.id}. {post.text}</div>
              <Icon
                className={classes.dlete_icon}
                id={post.id}
                onClick={e=>deletePost(e)} 
                icon='clear'
                color='red'
                sire={24}
              />
            </div>})}  
      </div> 
      :
      <Text text={'No toDo now'}/>
    }
  </div>
  );
};

export default List;