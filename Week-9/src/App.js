import React from 'react';
import './App.css';
import { ToDoList } from './components/ToDoList';

function App() {
	return (
		<div className="App">
			<header className="App-header">Add to do list</header>
			<ToDoList />
		</div>
	);
}

export default App;
