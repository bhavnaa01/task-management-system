import axios from "axios";

const TaskList = ({ tasks, fetchTasks }) => {

  const deleteTask = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
      console.log(response);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log('Resource not found!');
      } else {
        console.log('An error occurred:', error);
      }
    }
    fetchTasks();
  };
  return (
    <>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center">NO DATA</td>
            </tr>
          ) : (tasks.map(task => (
            <>

              <tr key={task.id}>
                <th scope="row">{task.id}</th>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>{task.status === 'complete' ? <span class="badge badge-pill badge-success">Complete</span> : '' || task.status === 'in progress' ? <span class="badge badge-pill badge-info">In Progress</span> : '' || task.status === 'incomplete' ? <span class="badge badge-pill badge-danger">Incomplete</span> : ''}</td>
                <td><button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button></td>
              </tr>
            </>

          )))}

        </tbody>
      </table>
    </>
  )
}
export default TaskList;
