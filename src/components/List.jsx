import React from 'react';
import Text from './Text'

const List = ({state,dispatch,classes,}) => {

  const deletePost = (e)=>{
    dispatch({
      type: 'deleteToDo',
      data: [
          ...state.data.filter( item => item.id !== +e.target.id) || []
        ]
    })
    try {
      localStorage.setItem('toDoList', JSON.stringify([
        ...state.data.filter( item => item.id !== +e.target.id) || []
      ]));
   } catch (error) {
      console.log(error)
   }
  }

  return (
    <div>
          {!!state.data.length ? <div  className={classes.posts_wraper} >
            {state.data.map((post, index)=>{
              return  <div className={classes.post_item} key={index}>
                          <div>{post.id}. {post.data}</div>
                            <span id={post.id} 
                                onClick={e=>deletePost(e)} 
                                className={classes.span_x}>
                                  X
                            </span>
                      </div>})}  
      </div> 
          :
          <Text text={'No toDo now'}/>}
    </div>
  )
}

export default List;