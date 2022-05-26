const UPDATE_POST_DIALOG_MESSAGE = 'UPDATE_POST_DIALOG_MESSAGE';
const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';

const dialogReducer = (state, action) => {
	switch (action.type) {
		case UPDATE_POST_DIALOG_MESSAGE:
			let newText = action.text;
			state.newMessageText = newText
			return state
		case ADD_NEW_DIALOG_MESSAGE:
			let newDialog = {
				id: 4,
				message: state.newMessageText
			}
			state.messages.push(newDialog)
			state.newMessageText = ""
			return state
		default:
			return state
	}
	
}

export const updatePostMessageDialodActionCreator = (val) => {
	return {
		type: UPDATE_POST_DIALOG_MESSAGE,
		text: val
	}
}

export const addNewDialogActionCreater = () => {
	return {
		type: ADD_NEW_DIALOG_MESSAGE
	}
}

export default dialogReducer
