import { ChangeEvent } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";

export function HistoricoCalculos() {
  const { calculo, setCalculo, resultado, setResultado } = useCalculadora();

  const editCalculo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let splitCalc = calculo.split(" ");
    splitCalc[parseInt(e.target.id)] = inputValue.length ? inputValue : "0";
    let stringCalc = splitCalc.join(" ");
    setCalculo(stringCalc);
    setResultado(eval(stringCalc));
  };

  const createHistorico = () =>
    calculo.split(" ").map((elemento, index) => {
      const isNumber: boolean = !!parseFloat(elemento); // checar se é numero ou sinal de operação

      return isNumber ? (
        <input
          key={index.toString()}
          id={index.toString()}
          type={"number"}
          className="numero-historico"
          value={elemento}
          style={{ width: elemento.length + 0.3 + "ch" }}
          onInput={editCalculo}
        />
      ) : (
        <span
          key={index.toString()}
          id={index.toString()}
          className="text-gray-400 bg-transparent"
        >
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
      {resultado !== null && calculo.length > 0 && (
        <div className="text-5xl text-green-400 absolute bottom-3 right-3">
          ={resultado}
        </div>
      )}
    </div>
  );
}
