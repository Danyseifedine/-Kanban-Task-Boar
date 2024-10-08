import classNames from 'classnames';
import './task.css'
import { useStore } from '../../store';
import { useState } from 'react';

export default function Task({ title }) {

  const task = useStore((store) => store.tasks.find((task) => task.title === title));
  const deleteTask = useStore((store) => store.deleteTask);
  const updateTask = useStore((store) => store.updateTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  function handleEditTask() {
    updateTask(task.id, { title: taskTitle });
    setIsModalOpen(false);
  }
  
  
  return (
    <div className="task" draggable onDragStart={() => setDraggedTask(task)}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <button onClick={() => deleteTask(task.id)}>delete</button>
        <button onClick={() => setIsModalOpen(true)}>edit</button>
        </div>
          <p>{task.title}</p>
          <div className='bottomWrapper'>
              <div></div>
              <div className={classNames('status', task.state)}>{ task.state }</div>
      </div>
      
     {isModalOpen && <div className='modal'>
        <p>Edit task</p>
        <input type="text" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <button onClick={handleEditTask}>Save</button>
      </div>}
    </div>
  )
}
