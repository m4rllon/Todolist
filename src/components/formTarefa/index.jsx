import { useEffect, useState } from "react";
import projetos from "../../mocks/projetos";
import tags from "../../mocks/tags";
import { useTaskContext } from "../../hooks/useTaskContext";

export default function FormTarefa({ operacao = "" }) {
  const { taskTarget, adicionarTarefa, editarTarefa, setOperationSelect } =
    useTaskContext();
  const nomeOperacao = operacao === "EDIT" ? "Salvar" : "Adicionar";
  const [formData, setFormData] = useState(taskTarget);

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
    operacao === "ADD" ? adicionarTarefa(formData) : editarTarefa(formData);
    cancelOperation();
  };

  const clickBox = () => {};

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
        onChange={() => handleChange}
        value={formData.descricao}
      />

      <label>Data de finalização</label>
      <input
        name="dataTermino"
        type="date"
        onChange={handleChange}
        value={formData.dataTermino}
      />

      <label> Tags</label>
      {tags.map((tag, index) => {
        return (
          <span key={index} className="flex gap-2">
            <input type="checkbox" onClick={clickBox} />
            <p>{tag.nomeDaTag}</p>
          </span>
        );
      })}

      <label> Projetos</label>
      {projetos.map((projeto, index) => {
        return (
          <span key={index} className="flex gap-2">
            <input type="checkbox" />
            <p>{projeto.nomeDoProjeto}</p>
          </span>
        );
      })}
    </form>
  );
}
