import React, { useState } from 'react';

function AddTask({ onAdd }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd({ title });
    setTitle('');
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className="add-task-input"
      />
      <button type="submit" className="add-task-button buttonTodoApp">
        Add Task
      </button>
    </form>
  );
}

export default AddTask;