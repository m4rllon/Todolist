import { createContext, useEffect, useReducer, useState } from "react";
import tarefas from "../mocks/tarefas";
import projetosMock from "../mocks/projetos";
import tagsMock from "../mocks/tags";
import { taskReducer } from "../reducers/tasksReducer";

export const TasksContext = createContext();

TasksContext.displayName = "Tarefas";

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, tarefas);
  const [taskTarget, setTaskTarget] = useState({});
  const [operationSelect, setOperationSelect] = useState({
    status: false,
    opeName: "",
  });
  const [ tags, setTags ] = useState(tagsMock)
  const [ projetos, setProjetos ] = useState(projetosMock)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        dispatch,
        taskTarget,
        setTaskTarget,
        operationSelect,
        setOperationSelect,
        tags, 
        setTags,
        projetos,
        setProjetos
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
