import { createContext, useEffect, useReducer, useState } from "react";
import tarefas from "../mocks/tarefas";
import { taskReducer } from "../reducers/tasksReducer";

export const TasksContext = createContext();

TasksContext.displayName = "Tarefas";

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, tarefas);
  const [taskTarget, setTaskTarget] = useState({});

  return (
    <TasksContext.Provider
      value={{ tasks, dispatch, taskTarget, setTaskTarget }}
    >
      {children}
    </TasksContext.Provider>
  );
};
