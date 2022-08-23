import React from 'react';
import Icon from './Icon';
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
   }catch (error) {
      console.log(error)
   }
  }

  return (
    <div>
          {!!state.data.length ? <div  className={classes.posts_wraper} >
            {state.data.map((post, index)=>{
              return  <div className={classes.post_item} key={index}>
                          <div>{post.id}. {post.data}</div>
                            
                                  <Icon
                                    className={classes.span_x}
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
  )
}

export default List;