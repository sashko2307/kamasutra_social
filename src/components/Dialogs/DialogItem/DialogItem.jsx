import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from './DialogItem.module.css'

const DialogItem = ({name, id}) => {
	return (
		<div className={cl.dialog}>
			<NavLink className={({isActive}) => isActive ? cl.active : null} to={`/dialogs/${id}`}>{name}</NavLink>
		</div>
	)
}

export default DialogItem;
