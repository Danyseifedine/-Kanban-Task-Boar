import { useStore } from '../../store'
import Task from '../task/Task'
import './column.css'

export default function Column({ state }) {

  const tasks = useStore((store) => store.tasks);
  const filteredTasks = tasks.filter((task) => task.state === state);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const addTask = useStore((store) => store.addTask);
  const moveTask = useStore((store) => store.moveTask);


  const handleAddTask = () => {
    const title = prompt('Enter task title:');

    const task = {
      id: Date.now().toString().slice(0, 10) + Math.random().toString(36).slice(2),
      title: title,
      state: state
    }

    if (title) {
      addTask(task);
    }
  };

  return (
    <div className='column'
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => {
        setDraggedTask(null),
        moveTask(draggedTask, state)
      }}>
      <div className='titleWrapper'>
        <p>{state}</p>
        <button onClick={handleAddTask}>+</button>
      </div>
      {filteredTasks.length === 0 ? (
        <p className="empty-column">No tasks in this column</p>
      ) : (
        filteredTasks.map((task) => (
          <Task key={task.id} title={task.title} state={task.state} />
        ))
      )}
    </div>
  )
}