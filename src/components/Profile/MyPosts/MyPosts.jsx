
import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    return (
        <div>
            <div className='my-posts'>
				<textarea name=""></textarea>
				<button>Добавить</button>
                <div className=''>new post</div>
                <div className=''>
                    <Post message="ghh" like="11" />
                    <Post message="ghhdbsb" like="8" />
                </div>
            </div>
        </div>
    );
}

export default MyPosts;
