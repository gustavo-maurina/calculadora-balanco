import { ChangeEvent } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";

export function HistoricoCalculos() {
  const { calculo, setCalculo, resultado, setResultado } = useCalculadora();

  const editCalculo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    let splitCalc = calculo.split(" ");
    splitCalc[+e.target.id] = inputValue.length ? inputValue : "0";
    let stringCalc = splitCalc.join(" ");
    setCalculo(stringCalc);
    setResultado(eval(stringCalc));
  };

  const createHistorico = () =>
    calculo.split(" ").map((value, idx) => {
      const isNumber: boolean = !!parseFloat(value); // checar se é numero ou sinal de operação

      return isNumber ? (
        <input
          key={"historico" + idx}
          id={idx.toString()}
          type={"number"}
          className="numero-historico"
          value={value}
          style={{ width: value.length + 0.3 + "ch" }}
          onInput={editCalculo}
        />
      ) : (
        <span
          key={idx.toString()}
          id={idx.toString()}
          className="text-gray-400 bg-transparent"
        >
          {value}
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
          ={Number.isInteger(resultado) ? resultado : resultado?.toFixed(2)}
        </div>
      )}
    </div>
  );
}
