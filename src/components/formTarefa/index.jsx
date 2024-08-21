import { useState } from "react";
import projetos from "../../mocks/projetos";
import tags from "../../mocks/tags";
import { useTaskContext } from "../../hooks/useTaskContext";

export default function FormTarefa({ operacao = "" }) {
  const { taskTarget, setTaskTarget, adicionarTarefa, editarTarefa } =
    useTaskContext();
  const nomeOperacao = operacao === "EDIT" ? "Salvar" : "Adicionar";
  const [formData, setFormData] = useState(taskTarget);

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formData);
    operacao === "ADD" ? adicionarTarefa(formData) : editarTarefa(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // console.log(formData);
  };

  const clickBox = () => {
    // console.log("clicou");
  };

  return (
    <form onSubmit={(e) => submitForm(e)} className="flex flex-col">
      <span className="flex gap-5">
        <button type="submit">{nomeOperacao}</button>
        <button>Cancelar</button>
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
        // value={formData.dataTermino}
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
