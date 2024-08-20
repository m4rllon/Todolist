import { useState } from "react";
import Tarefa from "../tarefa";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function SecaoTarefas({ secao, tarefas, prevStatus = true }) {
  const [allTasks, setAllTasks] = useState(prevStatus);
  return (
    <>
      <div className="flex flex-col justify-start">
        <div className="flex gap-2 px-4">
          <button onClick={() => setAllTasks((prev) => !prev)}>
            {allTasks ? (
              <ChevronDownIcon className="size-6" />
            ) : (
              <ChevronUpIcon className="size-6" />
            )}
          </button>
          <p>{secao}</p>
        </div>
        <hr className="border-gray-500 border-2 mx-2 my-2 w-[800px] flex" />
      </div>
      {allTasks &&
        tarefas.map((tarefa, index) => {
          return <Tarefa key={index} tarefa={tarefa} />;
        })}
    </>
  );
}
