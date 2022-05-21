
import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const posts = [
	{id: 1, message: "mess 1", like: 44},
	{id: 2, message: "mess 2", like: 434},
	{id: 3, message: "mess 3", like: 454},
]

function MyPosts(props) {
	return (
        <div>
            <div className={cl.myPosts}>
                <h3>Мои посты</h3>
				<textarea name=""></textarea>
				<button className="button">Добавить</button>
				<div className=''>
					{ posts.map(post => {
						return <Post key={post.id} id={post.id}  message={post.message} like={post.like} />
					})}
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
