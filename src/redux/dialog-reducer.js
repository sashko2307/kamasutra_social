const UPDATE_POST_DIALOG_MESSAGE = 'UPDATE_POST_DIALOG_MESSAGE';
const ADD_NEW_DIALOG_MESSAGE = 'ADD_NEW_DIALOG_MESSAGE';

let initialState =  {
	dialogs: [
		{ id: 1, name: 'Дима' },
		{ id: 2, name: 'Леша' },
		{ id: 3, name: 'Ира' }
	],
	messages: [
		{ id: 1, message: 'hi' },
		{ id: 2, message: 'how' },
		{ id: 3, message: 'hi v' }
	],
	newMessageText: ""
}
const dialogReducer = (state = initialState, action) => {
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
