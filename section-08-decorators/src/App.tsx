import React from 'react'
import { Component } from 'react'

interface Props {
	name?: string
}

interface State {

}

class App extends Component<Props, State> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<div className="app">
				<header>{this.props.name}</header>
			</div>
		)
	}
}

export default App