import {
  TrashIcon,
  ChatBubbleLeftIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

export default function Tarefa({
  nome,
  descricao,
  dataTermino,
  dataInicio,
  tags,
  status,
  projetos,
}) {
  return (
    <div className="w-[50rem] my-5 px-5">
      <span className="my-2 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input className="w-4" type="checkbox" name="" id="" />
          <p className="text-xl">{nome}</p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <button>
            <ChatBubbleLeftIcon className="size-6" />
          </button>
          <button>
            <PencilIcon className="size-6" />
          </button>
          <button>
            <TrashIcon className="size-6" />
          </button>
        </div>
      </span>
      <p className="text-red-600 pl-3 text-xl my-2">
        Termina em: {dataTermino}
      </p>
      <hr className="border-black-700 border-2 mx-auto mb-2" />
    </div>
  );
}
