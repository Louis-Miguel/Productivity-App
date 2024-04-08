import React from 'react';
import TaskItem from './TaskItem'; 

interface Task {
    id: string;
    text: string;
    completed: boolean;
  }

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onComplete }) => {
  return (
    <div className="mt-4"> 
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onDelete={onDelete} 
          onComplete={onComplete} 
        />
      ))}
    </div>
  );
};

export default TaskList;