import { CheckCircleIcon } from "@heroicons/react/24/outline";
// import Tarefa from "../../../components/tarefa";
import tarefas from "../../../mocks/tarefas";
import { formatDateWithMonthName } from "../../../utils/formatDate";
import { getTasksCompletedNumber } from "../../../utils/getTasksCompletedNumber";
import SecaoTarefas from "../../../components/secaoTarefas";
import { useState } from "react";

export default function ListaTarefas() {
  const data = formatDateWithMonthName();
  const completedNumber = getTasksCompletedNumber(tarefas);

  const [tasksCompleted, setTasksCompleted] = useState(
    tarefas.filter((task) => task.status),
  );

  return (
    <>
      <span className="flex flex-row justify-start items-center my-2 px-5 gap-5">
        <h1 className="text-2xl font-bold">Hoje, {data}</h1>
        <div className="inline-block w-1 h-10 bg-slate-400"></div>
        <div className="flex items-center gap-1">
          <CheckCircleIcon className="size-6" />
          <h1 className="text-2xl font-bold text-gray-500">
            Completas: {completedNumber}/{tarefas.length}
          </h1>
        </div>
      </span>
      <div>
        <SecaoTarefas tarefas={tarefas} />
        <SecaoTarefas tarefas={tasksCompleted} prevStatus={false} />
      </div>
    </>
  );
}
