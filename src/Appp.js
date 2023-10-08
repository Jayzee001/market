//import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from './components/TaskActions/TaskActions';
import AddTask from './components/AddTask/AddTask';
import ListTask from './components/ListTask/ListTask'; 



//function App() {
//  const dispatch = useDispatch();
//  const filter = useSelector((state) => state.filter);
//
  //const handleFilterChange = (e) => {
 //   dispatch(filterTasks(e.target.value));
 // };
 // return (
    
  //  <div>
 //     <h1>ToDo App</h1>
 //     <AddTask />
 //     <div>
 //       <label>Show tasks: </label>
 //       <select onChange={handleFilterChange} value={filter}>
 //         <option value="all">All</option>
 //         <option value="done">Done</option>
 //         <option value="notDone">Not Done</option>
 //       </select>
//      </div>
 //     <ListTask />
    //
//  </div>
      
//  );
//}

//export default App;


import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
	return (
		<div className="app">
			<h1 className="app-title">My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
	);
};

export default App;