import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions'

const TodoItem = props => {
	const { index, item } = props;
	const handleClick = () => {
		console.log('Delete item at index: ', index);

		props.deleteTodo(index);
	}
	const toggleComplete = () => {
		console.log('Toggle complete at index: ', index);
	}
	return (
		<li className="collection-item row">
			<div className="col s8">
				{item.title}
			</div>
			<div className="col s2">
				<button className={`btn  ${item.complete ? 'yellow darken-2' : 'blue lighten-2'}`}>{item.complete ? 'Restore' : 'Complete'}</button>
			</div>
			<div className="col s2">
				<button onClick={handleClick} className="btn red darken-3">Delete</button>
			</div>
		</li>
	)
}

export default connect(null, { deleteTodo })(TodoItem);
