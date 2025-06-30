import React from 'react';
import { Card, Badge } from 'react-bootstrap';

const TaskItem = ({ task }) => {
  return (
    <Card className="mb-3 shadow-sm border-0 bg-white">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <span>{task.title}</span>
          <Badge bg={task.status === 'completed' ? 'success' : 'secondary'}>
            {task.status}
          </Badge>
        </Card.Title>
        <Card.Text>{task.description}</Card.Text>
        <Card.Text>
          <small className="text-muted">Created: {new Date(task.createdAt).toLocaleString()}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TaskItem;
