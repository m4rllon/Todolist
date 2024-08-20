import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex justify-center gap-10 items-center h-[128px] bg-[rgb(128,20,79)]">
      <Link className="text-lg text-white" to={"/"}>
        Marlluslist
      </Link>
      <Link className="text-lg text-white" to={"/minhastarefas"}>
        Minhas atividades
      </Link>
      <Link className="text-lg text-white" to={"/relatoriodedesempenho"}>
        Relatório de desempenho
      </Link>
    </footer>
  );
}
