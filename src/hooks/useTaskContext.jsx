import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../reducers/tasksReducer";

const addTaskAction = (newTask) => ({
  type: ADD_TASK,
  payload: newTask,
});

const deleteTaskAction = (newTask) => ({
  type: DELETE_TASK,
  payload: newTask,
});

const editTaskAction = (newTask) => ({
  type: EDIT_TASK,
  payload: newTask,
});

export const useTaskContext = () => {
  const {
    tasks,
    dispatch,
    taskTarget,
    setTaskTarget,
    operationSelect,
    setOperationSelect,
    tags, 
    setTags,
    projetos,
    setProjetos,
  } = useContext(TasksContext);

  function adicionarTarefa(novaTarefa) {
    dispatch(addTaskAction(novaTarefa));
  }

  function removerTarefa(tarefa) {
    dispatch(deleteTaskAction(tarefa));
  }

  function editarTarefa(tarefaEditada) {
    dispatch(editTaskAction(tarefaEditada));
  }

  return {
    tasks,
    dispatch,
    taskTarget,
    setTaskTarget,
    operationSelect,
    setOperationSelect,
    tags, 
    setTags,
    projetos,
    setProjetos,
    adicionarTarefa,
    removerTarefa,
    editarTarefa,
  };
};
