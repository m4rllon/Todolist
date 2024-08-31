import { useTaskContext } from "../hooks/useTaskContext"

export const generateId = () => {
    const {tasks} = useTaskContext()
    tasks.forEach(task => {
        var newId = Math.random()
        if(newId !== task.id) return newId
    });
}