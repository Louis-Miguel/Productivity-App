import React from 'react';

interface Task {
  id: string; 
  text: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete, onComplete }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md mb-2 flex items-center justify-between">
      <div className={task.completed ? 'line-through' : ''}>
        {task.text}
      </div>
      <div>
        <button className="bg-blue-500 ..." onClick={() => onComplete(task.id)}>
          Mark Complete
        </button>
        <button className="bg-red-500 ..." onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;