export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const EDIT_TASK = "EDIT_TASK";

export const taskReducer = (estado, acao) => {
  switch (acao.type) {
    case ADD_TASK:
      const newTask = acao.payload;
      return [newTask, ...estado];

    case DELETE_TASK:
      const oldTask = acao.payload;
      const newState = estado.filter((task) => task.nome !== oldTask.nome);
      return newState;

    case EDIT_TASK:
      const taskEdited = acao.payload;
      return estado.map((task) =>
        task.id === taskEdited.id ? taskEdited : task,
      );

    default:
      return estado;
  }
};
