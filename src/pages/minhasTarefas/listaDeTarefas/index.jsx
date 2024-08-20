import { CheckCircleIcon } from "@heroicons/react/24/outline";
import listaDeTarefas from "../../../mocks/tarefas";
import { formatDateWithMonthName } from "../../../utils/formatDate";
import { getTasksCompletedNumber } from "../../../utils/getTasksCompletedNumber";
import SecaoTarefas from "../../../components/secaoTarefas";
import { useEffect, useState } from "react";
import { useTaskContext } from "../../../hooks/useTaskContext";

export default function ListaTarefas() {
  const { tasks, dispatch, adicionarTarefa, removerTarefa, editarTarefa } =
    useTaskContext();

  const data = formatDateWithMonthName();
  const completedNumber = getTasksCompletedNumber(tasks);

  const [tasksCompleted, setTasksCompleted] = useState(
    tasks.filter((task) => task.status),
  );

  useEffect(() => {
    setTasksCompleted(tasks.filter((task) => task.status));
  }, [tasks]);

  return (
    <>
      <span className="flex flex-row justify-start items-center my-2 px-5 gap-5">
        <h1 className="text-2xl font-bold">Hoje, {data}</h1>
        <div className="inline-block w-1 h-10 bg-slate-400"></div>
        <div className="flex items-center gap-1">
          <CheckCircleIcon className="size-6" />
          <h1 className="text-2xl font-bold text-gray-500">
            Completas: {completedNumber}/{listaDeTarefas.length}
          </h1>
        </div>
      </span>
      <div>
        <SecaoTarefas secao={"Todas as tarefas"} tarefas={tasks} />
        <SecaoTarefas
          secao={"Finalizadas"}
          tarefas={tasksCompleted}
          prevStatus={false}
        />
      </div>
    </>
  );
}
