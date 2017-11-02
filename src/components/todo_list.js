import React, { Component } from 'react';
import { connect } from 'react-redux';
import todoData from '../helpers/dummy_data';
import { getAll } from '../actions';


class TodoList extends Component {
	componentDidMount(){
		this.props.getAll();
	}

	render(){
		console.log('List from props: ', this.props.allTodos)
		const todoElements = this.props.allTodos.map((todoItem, index) => {
			return <li className="collection-item" key={index}>{todoItem.title}</li>;
		}); 
		return (
			<div>
				<ul>{todoElements}</ul>
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		allTodos: state.todo.all
	}
}

export default connect(mapStateToProps, { getAll })(TodoList);