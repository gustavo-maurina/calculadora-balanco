import { useCalculadora } from "../contexts/CalculadoraProvider";

export function HistoricoCalculos() {
  const { calculo, resultado } = useCalculadora();

  const createHistorico = () =>
    calculo.split(" ").map((elemento) => {
      if (parseFloat(elemento)) return <span>{elemento}</span>; //se for numero
      return (
        // se for sinal de operacao
        <span className="text-gray-400">
          {elemento}
          <p></p>
        </span>
      );
    });

  return (
    <div className="min-h-[400px] w-[300px] h-fit p-5 bg-gray-800 rounded relative">
      <p className="text-white text-3xl mb-5">Historico</p>
      <div id="historico" className="text-gray-300 text-4xl pb-12">
        {createHistorico()}
      </div>
      {resultado && (
        <div className="text-5xl text-green-400 absolute bottom-3 right-3">
          ={resultado}
        </div>
      )}
    </div>
  );
}
