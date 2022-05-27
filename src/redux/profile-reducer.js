const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';

let initialState = {
	posts: [
		{ id: 1, message: "mess 1", like: 44 },
		{ id: 2, message: "mess 2", like: 434 },
		{ id: 3, message: "mess 3", like: 454 },
	],
	newPostText: ""
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 4,
				message: state.newPostText,
				like: 0
			}
			state.posts.push(newPost)
			state.newPostText = ""
			return state;
		case UPDATE_POST_MESSAGE:
			let newText = action.text;
			state.newPostText = newText
			return state
			
		default:
			return state
	}
}

export const addPostActionCreator = () => {
	return {type: ADD_POST}
}
export const updatePostMessageActionCreator = (val) => {
	return {
		type: UPDATE_POST_MESSAGE,
		text: val
	}
}

export default profileReducer
