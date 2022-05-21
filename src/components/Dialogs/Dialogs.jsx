import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";




const dialogs = [
	{id: 1, name: 'Дима'},
	{id: 2, name: 'Леша'},
	{id: 3, name: 'Ира'}
]
const messages = [
	{id: 1, message: 'hi'},
	{id: 2, message: 'how'},
	{id: 3, message: 'hi v'}
]

const Dialogs = (props) => {
    return (
        <div className={`${cl.dialogs_page} row`}>
            <div className={`${cl.dialogs} col`}>
				{ dialogs.map(dialog => {
					return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
				})}
            </div>
			<div className={ `${cl.messages} col` }>
				{messages.map(message => <Message id={message.id} message={message.message} key={message.id} />)}
            </div>
        </div>
    );
};

export default Dialogs;
