export function getTasksCompletedNumber(tasksList) {
  let acumulador = 0;
  tasksList.forEach((task) => {
    if (task.status) acumulador += 1;
  });
  return acumulador;
}
