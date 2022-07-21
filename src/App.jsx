import React, { useState} from 'react'
import './App.css'

import Menu from './components/Menu'
import Content from './components/Content'

function App() {
	const [show, setShow] = useState("users")

	return (
		<div>
			<Menu setShow={setShow} />
			<Content show={show} />
		</div>
	)
}

export default App
