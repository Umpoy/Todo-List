import types from './types';
import todoData from '../helpers/dummy_data';

export function getAll(){
	return {
		type: types.GET_ALL,
		payload: todoData
	}
}

export function addTodo(item){
	return {
		type: types.ADD_TODO,
		payload: item
	}
}

export function deleteTodo(index){
	return {
		type: types.DELETE_TODO,
		payload: index
	}
}