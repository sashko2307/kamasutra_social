const state = {
	profilePage: {
		posts: [
			{id: 1, message: "mess 1", like: 44},
			{id: 2, message: "mess 2", like: 434},
			{id: 3, message: "mess 3", like: 454},
		]
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

export default state

