import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";


const addPost = (e) => {
	console.log(e)
}



const Dialogs = (props) => {
    return (
        <div className={`${cl.dialogs_page} row`}>
            <div className={`${cl.dialogs} col`}>
				{ props.dialogs.map(dialog => {
					return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
				})}
            </div>
			<div className={ `${cl.messages} col` }>
				{ props.messages.map(message => <Message id={ message.id } message={ message.message } key={ message.id } />) }
				
				<div className="inputBlock">
					<textarea name=""></textarea>
					<button onClick={(e) => addPost(e.target.innerText)}>Добавить</button>
				</div>
            </div>
        </div>
    );
};

export default Dialogs;
