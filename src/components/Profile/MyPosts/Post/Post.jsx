
import React from "react";
import cl from "./Post.module.css";

function Post(props) {
    return (
		<div className={ cl.item }>
			<div className={cl.img}>
				<img src="https://img.freepik.com/free-vector/beautiful-sports-girl-character-avatar-with-long-black-hair_491904-70.jpg" alt="pic" />
			</div>
			{ props.message }
			<div className="likes">
				<span>like { props.like }</span>
			</div>
		</div>
    );
}

export default Post;
