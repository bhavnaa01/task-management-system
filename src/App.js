import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
function App() {
  const [tasks,setTasks]=useState([]);
  const fetchTasks=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    }catch(error){
      if (error instanceof axios.AxiosError) {
        console.error('Axios error:', error.message);
        if (error.code === 'ECONNREFUSED') {
          console.error('Connection refused');
        } else if (error.code === 'ENOTFOUND') {
          console.error('Server not found');
        } else {
          console.error('Unknown network error');
        }
      }
      else
      {
        console.error('Unknown error:', error);
      }
    }
  }
  useEffect(()=>{
    fetchTasks();
  },[]);
  return (
    <>
     <div className="App">
      {/* <h1>Task Manager</h1> */}
      <TaskForm fetchTasks={fetchTasks}/><br/>
      <TaskList tasks={tasks} fetchTasks={fetchTasks}/>
    </div>
    </>
   
  );
}

export default App;
