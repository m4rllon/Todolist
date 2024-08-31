import {
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";

import { useTaskContext } from "../../hooks/useTaskContext";
import {formatDateForTaskCard} from '../../utils/formatDate';
import { useRef, useState } from "react";

export default function Tarefa({ tarefa, operationDetect }) {
  const check = useRef(null)
  const { removerTarefa, setTaskTarget, editarTarefa } = useTaskContext();
  const [status, setStatus] = useState(tarefa.status)

  const handleClick = () =>{
    if(check.current.checked){
      const taskEdited = {
            'id': tarefa.id,
        'nome': tarefa.nome,
        'descricao': tarefa.descricao,
        'dataTermino': tarefa.dataTermino,
        'dataInicio': tarefa.dataInicio,
        'tags': tarefa.tags,
        'status': true,
        'projetos': tarefa.projetos
      }
      editarTarefa(taskEdited)
    }
    else{
      const taskEdited = {
        'id': tarefa.id,
    'nome': tarefa.nome,
    'descricao': tarefa.descricao,
    'dataTermino': tarefa.dataTermino,
    'dataInicio': tarefa.dataInicio,
    'tags': tarefa.tags,
    'status': false,
    'projetos': tarefa.projetos
  }
  editarTarefa(taskEdited)
    } 
      
  }

  return (
    <div className="w-[50rem] my-5 px-5">
      <span className="my-2 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <input ref={check} onClick={handleClick} defaultChecked={status} className="w-4" type="checkbox" />
          <p className="text-xl">{tarefa.nome}</p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <button onClick={() => operationDetect(tarefa, "EDIT")}>
            <PencilIcon className="size-6" />
          </button>
          <button onClick={() => removerTarefa(tarefa)}>
            <TrashIcon className="size-6" />
          </button>
        </div>
      </span>
      <p className="text-red-600 pl-3 text-xl my-2">
        Termina em: {formatDateForTaskCard(tarefa.dataTermino)}
      </p>
      <hr className="border-black-700 border-2 mx-auto mb-2" />
    </div>
  );
}
