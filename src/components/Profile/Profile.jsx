import logo2 from "./../../1-22.jpg";
import React from "react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div>
            <div className={cl.image}>
                <img src={logo2} alt='pix' />
            </div>
            <div className='ava'>ava + descr</div>
            <MyPosts />
        </div>
    );
}

export default Profile;
