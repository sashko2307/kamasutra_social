
import React from "react";
import { addPostActionCreator, updatePostMessageActionCreator } from "../../../redux/profile-reducer";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";




function MyPosts(props) {
	
	const handlerTextarea = (val) => {
		//props.updateNewPostText(val) 
		props.dispatch(updatePostMessageActionCreator(val))
	}
	const addPost = () => {
		if (props.newPostText.length > 0) {
			props.dispatch(addPostActionCreator()) // просто добавляем а сам текст берется из state newPostText 
		}
		  
		
	}
	return (
        <div>
            <div className={cl.myPosts}>
                <h3>Мои посты</h3>
				<textarea value={props.newPostText} onChange={(e) => handlerTextarea(e.target.value)} name="" placeholder="Добавить пост"></textarea>
				<button
					className="button"
					onClick={addPost}
				>Добавить
				</button>
				<div className=''>
					{ props.posts.map(post => {
						return <Post key={post.id} id={post.id}  message={post.message} like={post.like} />
					})}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
