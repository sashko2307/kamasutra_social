// 1. создаем файл для store, например redux-store.js
// 2. устанавливаем redux npm i redux


import { combineReducers, createStore } from "redux";

// 4. создаем комбайн-редьюсер где каждой странице свой редьюсер и передаем как параметр в store
let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogReducer,
	sidebar:     sidebarReducer,
})

// 3. подключаем stor из редакса и экспортируем его по дефолту
let store = createStore(reducers)
export default store

// 4. Каждый редьюсер должен иметь initialSore по умолчанию
