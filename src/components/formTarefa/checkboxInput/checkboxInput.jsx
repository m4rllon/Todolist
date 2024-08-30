import { useEffect, useRef, useState } from "react";
import { useTaskContext } from "../../../hooks/useTaskContext";

export default function CheckboxInput({tagName, addTaskSelect, tagType}){ 
  const inputBox = useRef(null)
  const atributo = (tagType === 'TAG') ? 'nomeDaTag' : 'nomeDoProjeto'
  const param = (tagType === 'TAG') ? 'tags' : 'projetos'

  const {taskTarget} = useTaskContext()

  const [defaultChecked, setDefaultChecked] = useState(taskTarget[param].some(prev => prev[atributo] === tagName))

  const handleChange = () => {
    addTaskSelect(inputBox.current.checked, tagName, atributo)
  }

  useEffect(()=>{
    setDefaultChecked(taskTarget[param].some(prev => prev[atributo] === tagName))
  }, [taskTarget])

  return (
        <span className="flex gap-2">
          <input ref={inputBox} defaultChecked={defaultChecked} onClick={handleChange} type="checkbox" />
          <p>{tagName}</p>
        </span>
      );
}