import { create } from "zustand"
import Arr from "./utils/array"
import { devtools, persist } from "zustand/middleware"

const store = (set) => ({

    tasks: [
        { id: 1, title: "First task", state: "PLANNED" },
    ],

    draggedTask: null,

    addTask: (task) => {
        return set((store) => ({
            tasks: Arr.add(store.tasks, task),
        }))
    },

    deleteTask: (id) => {
        return set((store) => ({
            tasks: Arr.remove(store.tasks, id, "id")
        }))
    },

    updateTask: (id, task) => {
        return set((store) => ({
            tasks: Arr.update(store.tasks, id, task, "id")
        }))
    },

    setDraggedTask: (task) => {
        return set(() => ({
            draggedTask: task
        }))
    },

    moveTask: (draggedTask, state) => {
        return set((store) => ({
            tasks: Arr.moveItem(store.tasks, draggedTask.title, { state: state }, "title")
        }))
    }
})

export const useStore = create(devtools(persist(store, { name: "store" })))

