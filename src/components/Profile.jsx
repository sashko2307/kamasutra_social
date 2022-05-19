
import logo2 from './../1-22.jpg';
import React from 'react';
import cl from './Profile/Profile.module.css'

function Profile(props) {
	return (
		<div>
			<div className={cl.image}>
				  <img src={logo2} alt="pix" />
			  </div>
			  <div className="ava">
				  ava + descr
			  </div>
			  <div className="my-posts">
			  my-postsf
			  </div>
			  <div className="">
				  new post
			  </div>
			  <div className="">
				  <div className="">
					  post 1
				  </div>
				  <div className="">
					  post 2
				  </div>
			  </div>
		</div>
	);
}

export default Profile;
