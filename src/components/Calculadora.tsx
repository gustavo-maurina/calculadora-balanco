import { ReactNode } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";
import { BotaoOperacao } from "./BotaoOperacao";

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export function Calculadora() {
  const { calculo, setCalculo, resultado, calculate } = useCalculadora();

  const createOperacaoAtual = (valor: string) => {
    if (!parseFloat(valor)) calculate(); // quando valor for operação
    setCalculo((curValue) => curValue + valor);
  };

  const createKeypad = (): ReactNode => (
    <div className="grid grid-cols-3 gap-4 w-full">
      {NUMBERS.map((number: number, index: number) => (
        <div
          id={(index + 1).toString()}
          key={index.toString()}
          className="btn-calculadora"
          onClick={() => createOperacaoAtual(number.toString())}
        >
          {number}
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="calculadora"
      className="w-[300px] h-[400px] bg-gray-500 p-6 flex flex-col align-center gap-8 shadow-2xl rounded"
    >
      <div
        id="visor"
        className="bg-green-900 w-full h-[70px] relative flex flex-col visorFont overflow-hidden"
      >
        <div className="absolute bottom-1 right-2">
          <div id="valores-visor" className="text-gray-300 text-xl">
            <p className="whitespace-nowrap">{calculo}</p>
          </div>
          {resultado !== null && (
            <div
              id="valores-visor"
              className="text-gray-300 text-3xl text-right"
            >
              {resultado}
            </div>
          )}
        </div>
      </div>
      <div id="keypad" className="flex justify-between">
        <div id="numbers">
          {createKeypad()}
          <div id="last-line" className="flex pt-4 gap-4">
            <BotaoOperacao
              id="0"
              createOperacao={createOperacaoAtual}
              valor={"0"}
            />
            <BotaoOperacao
              id="."
              createOperacao={createOperacaoAtual}
              valor={"."}
            />
            <div
              className="btn-calculadora bg-orange-500 hover:bg-orange-400"
              onClick={calculate}
            >
              =
            </div>
          </div>
        </div>

        <div id="operations" className="flex flex-col gap-4">
          <BotaoOperacao
            id="+"
            createOperacao={createOperacaoAtual}
            valor={" + "}
          />
          <BotaoOperacao
            id="-"
            createOperacao={createOperacaoAtual}
            valor={" - "}
          />
          <BotaoOperacao
            id="*"
            createOperacao={createOperacaoAtual}
            valor={" * "}
          />
          <BotaoOperacao
            id="/"
            createOperacao={createOperacaoAtual}
            valor={" / "}
          />
        </div>
      </div>
    </div>
  );
}
