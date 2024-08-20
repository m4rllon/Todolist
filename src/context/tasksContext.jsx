import { createContext, useReducer, useState } from "react";
import tarefas from "../mocks/tarefas";
import { taskReducer } from "../reducers/tasksReducer";

export const TasksContext = createContext();

TasksContext.displayName = "Tarefas";

export const TasksProvider = ({ children }) => {
  //   const [tasks, setTasks] = useState(tarefas);
  const [tasks, dispatch] = useReducer(taskReducer, tarefas);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};
