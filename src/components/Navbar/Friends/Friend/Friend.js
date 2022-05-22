import React from 'react'
import cl from './Friend.module.css'

const Friend = (props) => {
	return (
		<div className={cl.friend}>
			<div className={cl.img}></div>
			<div className={ cl.name }>{ props.friend.name }</div>
		</div>
	)
}

export default Friend;
