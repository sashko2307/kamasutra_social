import React from "react";
import { NavLink } from "react-router-dom";
import { addNewDialogActionCreater, updatePostMessageDialodActionCreator } from "../../redux/dialog-reducer";
import DialogItem from "./DialogItem/DialogItem";
import cl from "./Dialogs.module.css";
import Message from "./Message/Message";





const Dialogs = (props) => {
	const updateDialogMessage = (e) => {
		let val = e.target.value
		props.dispatch(updatePostMessageDialodActionCreator(val))
	}
	const addPostDialog = () => {
		props.dispatch(addNewDialogActionCreater())
	}
    return (
        <div className={`${cl.dialogs_page} row`}>
            <div className={`${cl.dialogs} col`}>
				{ props.dialogsPage.dialogs.map(dialog => {
					return <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
				})}
            </div>
			<div className={ `${cl.messages} col` }>
				{ props.dialogsPage.messages.map(message => <Message id={ message.id } message={ message.message } key={ message.id } />) }
				
				<div className="inputBlock">
					<textarea value={props.dialogsPage.newMessageText} onChange={updateDialogMessage} name=""></textarea>
					<button onClick={addPostDialog}>Добавить</button>
				</div>
            </div>
        </div>
    );
};

export default Dialogs;
