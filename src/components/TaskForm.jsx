import React, { useEffect, useState } from "react";
import axios from 'axios';

const TaskForm =({ fetchTasks })=>{
const [title,setTitle]=useState('');
const [description,setDescription]= useState('');
const [status,setStatus]= useState('');
const [data,setData]=useState([]);

const handleSubmit = async(e)=>{
    e.preventDefault();
    await axios.post('http://localhost:5000/api/tasks',{title,description,status});
   
    fetchTasks();
    setTitle('');
    setDescription('');
    setStatus('')
    
}

console.log(status)
console.log(title)


return(
<>
<form className="card text-center bg-dark text-white container" onSubmit={handleSubmit} >
  <div className="card-header">
   <h1>Task Manager</h1>
  </div>
  <div className="card-body">
  <div className="form-group">
    <label>Add Task Title</label>
    <input type="text" className="form-control"  placeholder="Enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="form-group">
    <label>Add Task Description</label>
    <textarea className="form-control" placeholder="Type here your description" rows="3" value={description} onChange={(e)=>setDescription(e.target.value)} required></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Status</label>
    <select class="form-control" id="status" onChange={(e)=> setStatus(e.target.value)}>
      <option value="" disabled selected>Select your status</option>
      <option value='incomplete'>Incomplete</option>
      <option value='complete' >Complete</option>
      <option value='in progress'>Inprogress</option>
      
    </select>
  </div>
  <button type="submit" className="btn btn-danger">Add Task</button>
    
  </div>
  
</form>
</>
      )
    }
    export default TaskForm;

  
  