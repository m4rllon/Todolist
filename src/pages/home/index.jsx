import { Link } from "react-router-dom";
import homeImage from "./images/home-image.png";
import taskImage from "./images/image-task.png";
import relatImage from "./images/image-relat.png";
import histImage from "./images/image-hist.png";
import setaEsq from "./images/seta-esq.png";
import setaDir from "./images/seta-dir.png";

export default function Marlluslist() {
  return (
    <main className="bg-[#F6F9FC] bg-custom-pattern bg-cover bg-no-repeat bg-center flex flex-col justify-center">
      <span className="pt-10 flex justify-center w-[100%] items-center gap-1">
        <div className="flex flex-col justify-start items-start gap-5 w-[40%]">
          <h2 className="text-blue-950 font-medium text-3xl">
            Bem-vindo(a) ao
          </h2>
          <h1 className="text-blue-950 font-medium text-7xl">Marlluslist</h1>
          <p className="text-blue-950 font-normal text-3xl">
            O portal que vai te ajudar melhorar sue rendimento e organização em
            200%!!!
          </p>
          <Link
            className="flex justify-center items-center rounded-lg w-[10rem] h-10 bg-fuchsia-800 text-white font-normal text-lg"
            to={"/minhastarefas"}
          >
            Comece já
          </Link>
        </div>
        <img
          className="w-[30%]"
          src={homeImage}
          alt="Pessoa planejando seu dia"
        />
      </span>
      <span className="pt-[10rem] flex justify-center w-[100%] px-[15%] items-center gap-5">
        <div className="flex justify-center flex-col gap-5">
          <h2 className="text-blue-950 font-medium text-4xl text-center">
            O que você encontrará por aqui:
          </h2>
          <p className="text-blue-950 font-normal text-3xl">
            No Marlluslist, você pode registrar e controlar suas atividades mais
            importantes, visualizar seu histórico de atividades completadas e
            analisar como está sendo seu rendimento ao longo do tempo!
          </p>
        </div>
      </span>
      <div className="my-[5rem] p-0 m-0 flex w-[100%] items-center justify-center">
        <Link to={"/historico"}>
          <img className="w-[252px] h-[230px]" src={histImage} alt="" />
        </Link>

        <img className="w-[124px] h-[67px]" src={setaEsq} alt="" />

        <Link to={"/minhastarefas"}>
          <img className="w-[252px] h-[230px]" src={taskImage} alt="" />
        </Link>

        <img className="w-[124px] h-[67px]" src={setaDir} alt="" />

        <Link to={"/relatoriodedesempenho"}>
          <img className="w-[252px] h-[230px]" src={relatImage} alt="" />
        </Link>
      </div>
    </main>
  );
}
