import React,{useContext} from 'react'
import { AppContext } from '../Contexts/AppContext'
import Card from './Card'

 const CardList=()=> {
    const{ posts,loading,currentPage,postsperPage}=useContext(AppContext);
    if(loading){
        return<div className='loading'>Loading...</div>;
    }
    const indexofLastPost = currentPage*postsperPage;
    const indexofFirstPost = indexofLastPost-postsperPage;
    const currentPosts = posts.slice(indexofFirstPost,indexofLastPost);

  return (
    <div className='card-list'>
        {currentPosts.map(post =>(
            <Card key={post.id} post={post}/>
        ))}
        
    </div>
  )
}
export default CardList;