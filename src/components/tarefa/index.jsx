import {
  TrashIcon,
  ChatBubbleLeftIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { useTaskContext } from "../../hooks/useTaskContext";

export default function Tarefa({ tarefa, operationDetect }) {
  const { removerTarefa } = useTaskContext();
  return (
    <div className="w-[50rem] my-5 px-5">
      <span className="my-2 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input className="w-4" type="checkbox" name="" id="" />
          <p className="text-xl">{tarefa.nome}</p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <button>
            <ChatBubbleLeftIcon className="size-6" />
          </button>
          <button onClick={() => operationDetect(tarefa, "EDIT")}>
            <PencilIcon className="size-6" />
          </button>
          <button onClick={() => removerTarefa(tarefa)}>
            <TrashIcon className="size-6" />
          </button>
        </div>
      </span>
      <p className="text-red-600 pl-3 text-xl my-2">
        Termina em: {tarefa.dataTermino}
      </p>
      <hr className="border-black-700 border-2 mx-auto mb-2" />
    </div>
  );
}
