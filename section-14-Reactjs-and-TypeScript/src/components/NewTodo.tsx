import React from 'react'

interface NewTodoProps {
	onAddNewTodo: (value: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({ onAddNewTodo }) => {
	const inputRef = React.createRef<HTMLInputElement>()

	const submitClickHandler = (event: React.FormEvent) => {
		event.preventDefault()
		const inputValue = inputRef.current!.value
		onAddNewTodo(inputValue)
	}

	return (
		<form>
			<div>
				<label htmlFor='todo-text'>Todo Text</label>
				<input type='text' id='todo-text' ref={inputRef} />
			</div>
			<button type='submit' onClick={submitClickHandler}>Add Todo</button>
		</form>
	)

}

export default NewTodo