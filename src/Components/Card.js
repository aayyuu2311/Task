import React, {useContext}from 'react'
import { AppContext } from '../Contexts/AppContext'



const Card = ({post})=>{
    const{removeCard}=useContext(AppContext); 
  return (
    <div className='card'>
        <button onClick={() =>removeCard(post.id)}>❌</button>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

        <img src="https://ideogram.ai/assets/image/lossless/response/gfkYNSuORZ2l0jNqoyzN7w" _alt="Post"/>
    </div>
  )
}
export default Card;
