import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers, selectUsers } from './store/userSlice'
import './App.css'

function App() {
	const dispatch = useDispatch()
	const users = useSelector(selectUsers)

	useEffect(() => {
		dispatch(getUsers())
	}, [])

	return (
		<div>
			{users.map((user, i) => 
				<div key={"user-"+i}>
					{user.name}
				</div>
			)}
		</div>
	)
}

export default App
