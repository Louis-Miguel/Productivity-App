import React, { useState } from 'react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

interface TaskFormProps {
  onAddTask: (newTask: Task) => void; 
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTaskText) return; 

    const newTask: Task = {
      id: Math.random().toString(36), // Simple ID generation (improve later)
      text: newTaskText,
      completed: false,
    };

    onAddTask(newTask);
    setNewTaskText('');
  };

  return (
    <form className="bg-white p-4 rounded-md" onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Add a new task"
        className="border border-gray-300 p-2 w-full rounded"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 ...">Add Task</button> 
    </form>
  );
};

export default TaskForm;