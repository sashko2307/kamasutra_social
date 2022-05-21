import React from 'react';
import picture from "./../../../1-22.jpg";
import cl from './ProfileInfo.module.css'

function ProfileInfo(props) {
	return (
		<div>
			<div className={cl.image}>
                <img width="585" height="272" src={picture} alt='pix' />
            </div>
            <div className={cl.descripton}>ava + descr</div>
		</div>
	);
}

export default ProfileInfo;
