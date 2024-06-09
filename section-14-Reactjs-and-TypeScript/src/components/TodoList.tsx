import React from 'react'

import { Todo } from '../App'

interface TodoListProps {
	todos: Todo[],
	onDeleteTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = ({ todos, ...props }) => {
	return (
		<ul style={{listStyleType: 'none'}}>
			{todos.map(todo => (
				<li key={todo.id}>
					<button onClick={() => props.onDeleteTodo(todo.id)}>X</button>
					<span className='spacer' style={{ marginLeft: '.5em' }} />
					{todo.text}
				</li>
			))}
		</ul>
	)
}

export default TodoList