
import React, { useState, useEffect } from 'react';
import '../styles/TodoAppStyle.css';
import TaskList from '../TodoAppComponents/TaskList';
import AddTask from '../TodoAppComponents/AddTask';
import Header from '../TodoAppComponents/TodoHeader';
import SearchBar from '../TodoAppComponents/SearchBar';
import NavBar from '../AppComponents/NavBar';

function TodoApp() {
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    const filtered = tasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
    setFilteredTasks(filtered);
  }, [tasks, searchQuery, filterStatus]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), status: 'planned' }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const updateTask = (taskId, updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, ...updatedTask } : task
    ));
  };

  return (
  <>
  <NavBar applogoname={"TaskoPhobia"}/>
    <div className="bodyTodoApp" style={{marginTop : "70px"}}>
      
      <div className="appTodoApp">
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="containerTodoApp">
        <AddTask onAdd={addTask} />
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
        />
        <TaskList 
          tasks={filteredTasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
        />
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default TodoApp;