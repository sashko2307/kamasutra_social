let renderEntireTree = () => {
	console.log('state rendered')
}

const state = {
	profilePage: {
		posts: [
			{id: 1, message: "mess 1", like: 44},
			{id: 2, message: "mess 2", like: 434},
			{id: 3, message: "mess 3", like: 454},
		],
		newPostText: ""
	},
	dialogsPage: {
		dialogs: [
			{id: 1, name: 'Дима'},
			{id: 2, name: 'Леша'},
			{id: 3, name: 'Ира'}
		],
		messages: [
			{id: 1, message: 'hi'},
			{id: 2, message: 'how'},
			{id: 3, message: 'hi v'}
		]
	},
	sidebar: {
		friends: [
			{id: 1,name: 'Дима'},
			{id: 2,name: 'Антон'},
			{id: 3,name: 'Оля'},
		]
	}
	
			
}

export const updateNewPostText = (text) => {
	let newText = text;
	state.profilePage.newPostText = newText
	renderEntireTree(state)
}

export const addPost = () => {
	let newPost = {
		id: 4,
		message: state.profilePage.newPostText,
		like: 0
	}
	state.profilePage.posts.push(newPost)
	renderEntireTree(state)
	state.profilePage.newPostText = ""
}

export const sibscriber = (observer) => {
	renderEntireTree = observer
}

export default state

