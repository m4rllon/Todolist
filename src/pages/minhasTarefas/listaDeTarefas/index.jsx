import { CheckCircleIcon } from "@heroicons/react/24/outline";
import listaDeTarefas from "../../../mocks/tarefas";
import { formatDateWithMonthName } from "../../../utils/formatDate";
import { getTasksCompletedNumber } from "../../../utils/getTasksCompletedNumber";
import SecaoTarefas from "../../../components/secaoTarefas";
import { useEffect, useState } from "react";
import { useTaskContext } from "../../../hooks/useTaskContext";
import FormTarefa from "../../../components/formTarefa";

export default function ListaTarefas() {
  const { tasks, taskTarget, setTaskTarget, operationSelect, setOperationSelect } =
    useTaskContext();

  const data = formatDateWithMonthName();
  const completedNumber = getTasksCompletedNumber(tasks);

  const [tasksCompleted, setTasksCompleted] = useState(
    tasks.filter((task) => task.status),
  );

  const operationDetect = (tarefaAlvo, operacao) => {
    setOperationSelect((prev) => {
      return { status: !prev.status, opeName: operacao };
    });
    setTaskTarget(tarefaAlvo);
  };

  const handleClickAddtask = () => {
    const newTask = {
      'id': Math.random(),
      'nome': "",
      'descricao': "",
      'dataTermino': "",
      'dataInicio': "",
      'tags': [],
      'status': false,
      'projetos': [],
    }
    operationDetect(newTask, "ADD")
  }

  useEffect(() => {
    setTasksCompleted(tasks.filter((task) => task.status));
  }, [tasks]);

  return (
    <div>
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

      <button onClick={handleClickAddtask} className="text-start mx-5 my-2 flex justify-center items-center h-[40px] w-[200px] bg-purple-800 text-white font-medium rounded-lg">
        Adicionar tarefa
      </button>
      
      <span className="flex gap-5">
        <div>
          <SecaoTarefas
            secao={"Todas as tarefas"}
            tarefas={tasks}
            operationDetect={operationDetect}
          />

          <SecaoTarefas
            secao={"Finalizadas"}
            tarefas={tasksCompleted}
            prevStatus={false}
            operationDetect={operationDetect}
          />
        </div>
        {operationSelect.status && (
          <FormTarefa operacao={operationSelect.opeName} />
        )}
      </span>
    </div>
  );
}
