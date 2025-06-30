// import React, { useState, useEffect } from 'react';
// import TaskList from '../components/TaskList';
// import TaskForm from '../components/TaskForm';
// import { fetchTasks, createTask } from '../services/api';
// import socket from '../socket';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     loadTasks();

//     socket.on('taskCreated', (task) => {
//       setTasks((prev) => [...prev, task]);
//     });

//     return () => {
//       socket.off('taskCreated');
//     };
//   }, []);

//   const loadTasks = async () => {
//     const res = await fetchTasks();
//     setTasks(res.data);
//   };

//   const handleAddTask = async (task) => {
//     const res = await createTask(task);
//     socket.emit('newTask', res.data);
//   };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <TaskForm onSubmit={handleAddTask} />
//       <TaskList tasks={tasks} />
//     </div>
//   );
// };

// export default Dashboard;



import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { fetchTasks, createTask } from '../services/api';
import socket from '../socket';
import { Container } from 'react-bootstrap';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
    socket.on('taskCreated', (task) => {
      setTasks((prev) => [...prev, task]);
    });
    return () => socket.off('taskCreated');
  }, []);

  const loadTasks = async () => {
    const res = await fetchTasks();
    setTasks(res.data);
  };

  const handleAddTask = async (task) => {
    const res = await createTask(task);
    socket.emit('newTask', res.data);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Dashboard</h2>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} />
    </Container>
  );
};

export default Dashboard;

