import React from 'react';
import Friend from './Friend/Friend';
import cl from './Friends.module.css'

const Friends = (props) => (
	<div className={ cl.fiends }>
		{ props.friends.map(friend => {
			return (
				<Friend friend={friend} key={friend.id} />
			)
		})}
	</div>
	);

export default Friends;
