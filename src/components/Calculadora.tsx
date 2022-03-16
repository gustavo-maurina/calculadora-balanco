import { ReactNode, useState } from "react";

export function Calculadora() {
  const [operacaoAtual, setOperacaoAtual] = useState<string>("");
  const [resultado, setResutaldo] = useState<number>();

  const createOperacaoAtual = (numero: string) => {
    setOperacaoAtual((curValue) => curValue + numero);
  };

  const calculate = () => {
    setResutaldo(eval(operacaoAtual));
  };

  const createKeypad = (): ReactNode => {
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
        {Array(9)
          .fill("x")
          .map((item: string, index: number) => (
            <div
              className="btn-calculadora"
              onClick={() => createOperacaoAtual((index + 1).toString())}
            >
              {index + 1}
            </div>
          ))}
      </div>
    );
  };

  return (
    <div
      id="calculadora"
      className="w-[300px] h-[420px] bg-gray-500 p-6 flex flex-col align-center gap-8 shadow-2xl rounded"
    >
      <div
        id="visor"
        className="bg-green-900 w-full h-[70px] relative flex flex-col"
      >
        <div className="absolute bottom-1 right-2">
          <div id="valores-visor" className="text-gray-300 text-lg">
            {operacaoAtual}
          </div>
          {resultado && (
            <div
              id="valores-visor"
              className="text-gray-300 text-2xl text-right"
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
            <div className="btn-calculadora">0</div>
            <div
              className="btn-calculadora w-full bg-orange-500 hover:bg-orange-400"
              onClick={calculate}
            >
              =
            </div>
          </div>
        </div>

        <div id="operations" className="flex flex-col gap-4">
          <div
            className="btn-calculadora"
            onClick={() => createOperacaoAtual(" + ")}
          >
            +
          </div>
          <div
            className="btn-calculadora"
            onClick={() => createOperacaoAtual(" - ")}
          >
            -
          </div>
          <div
            className="btn-calculadora pt-2"
            onClick={() => createOperacaoAtual(" * ")}
          >
            *
          </div>
          <div
            className="btn-calculadora"
            onClick={() => createOperacaoAtual(" / ")}
          >
            /
          </div>
        </div>
      </div>
    </div>
  );
}
