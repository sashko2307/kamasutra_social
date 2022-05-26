import dialogReducer from "./dialog-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



export const store = {
	
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "mess 1", like: 44 },
				{ id: 2, message: "mess 2", like: 434 },
				{ id: 3, message: "mess 3", like: 454 },
			],
			newPostText: ""
		},
		dialogsPage: {
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
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Дима' },
				{ id: 2, name: 'Антон' },
				{ id: 3, name: 'Оля' },
			]
		}
	},
	_callSubscriber() {
		console.log('state rendered')
	},
	getState() {
		return this._state
	},
	sibscriber(observer) {
		this._callSubscriber = observer
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)

		this._callSubscriber(this._state)
	}
	
	
}



