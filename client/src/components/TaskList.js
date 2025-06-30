import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  if (!tasks.length) return <p className="text-center text-muted">No tasks yet.</p>;

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
