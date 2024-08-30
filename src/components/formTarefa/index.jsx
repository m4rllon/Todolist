import { useEffect, useState } from "react";
import { useTaskContext } from "../../hooks/useTaskContext";
import CheckboxInput from "./checkboxInput/checkboxInput";

export default function FormTarefa({ operacao = "" }) {

  const { taskTarget, 
    adicionarTarefa, 
    editarTarefa, 
    setOperationSelect, 
    projetos, 
    tags} = useTaskContext();

  const nomeOperacao = operacao === "EDIT" ? "Salvar" : "Adicionar";
  const [formData, setFormData] = useState(taskTarget);
  const [tagsSelectList, setTagsSelectList] = useState(taskTarget.tags)
  const [projSelectList, setProjSelectList] = useState(taskTarget.projetos)

  const handleChange = (e) => {
    let { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const cancelOperation = () => {
    setOperationSelect({
      status: false,
      opeName: "",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if(operacao === "ADD"){
      adicionarTarefa(formData)
    } else {
      
      editarTarefa(formData)
      
    }
    setTagsSelectList([])
    setProjSelectList([])
    console.log(formData)
    cancelOperation();
  };

  const addTaskSelect = (inputBox, tagName, atributo) => {
    if(inputBox && atributo === 'nomeDaTag'){
      setTagsSelectList(prev => [...prev, {[atributo] : tagName}])
    } else if (inputBox && atributo === 'nomeDoProjeto'){
      setProjSelectList(prev => [...prev, {[atributo] : tagName}])
    } else {
      if(atributo === 'nomeDaTag'){
        setTagsSelectList(prev => prev.filter(tag => tag[atributo] !== tagName))
      }
      if(atributo === 'nomeDoProjeto'){
        setProjSelectList(prev => prev.filter(tag => tag[atributo] !== tagName))
      } 
    }
  }

  useEffect(()=>{
    setFormData(prev => { return{
      ...prev,
      'projetos': projSelectList,
      'tags': tagsSelectList
    }})
  }, [projSelectList, tagsSelectList])

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <span className="flex gap-5">
        <button type="submit">{nomeOperacao}</button>
        <button onClick={cancelOperation}>Cancelar</button>
      </span>

      <label>Nome da tarefa</label>
      <input
        type="text"
        name="nome"
        value={formData.nome}
        onChange={handleChange}
      />

      <label>Descrição</label>
      <textarea
        name="descricao"
        rows="4"
        cols="33"
        onChange={handleChange}
        value={formData.descricao}
      />

      <label>Data de finalização</label>
      <input
        name="dataTermino"
        type="date"
        onChange={handleChange}
        value={formData.dataTermino}
      />

      <label>Tags</label>
      {tags.map((tag,index)=> 
        <CheckboxInput key={index} addTaskSelect={addTaskSelect} tagName={tag.nomeDaTag} tagType={'TAG'}/>
        )}

      <label>Projetos</label>
      {projetos.map((projeto, index) =>
        <CheckboxInput key={index} addTaskSelect={addTaskSelect} tagName={projeto.nomeDoProjeto} tagType={'PROJ'}/>
        )}
    </form>
  );
}
