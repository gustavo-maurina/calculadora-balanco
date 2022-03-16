import { ReactNode } from "react";

export function Calculadora() {
  const createKeypad = (): ReactNode => {
    return (
      <div className="grid grid-cols-3 gap-4 w-full">
        {Array(9)
          .fill("x")
          .map((item: string, index: number) => (
            <div className="btn-calculadora">{index + 1}</div>
          ))}
      </div>
    );
  };

  return (
    <div
      id="calculadora"
      className="w-[300px] h-[380px] bg-gray-500 p-6 flex flex-col align-center gap-8 shadow-2xl rounded"
    >
      <div id="visor" className="bg-green-900 w-full h-[100px] relative">
        <div
          id="valores-visor"
          className="text-gray-300 absolute bottom-2 right-2 text-2xl"
        >
          5123
        </div>
      </div>
      <div id="keypad" className="flex justify-between">
        <div id="numbers">
          {createKeypad()}
          <div id="last-line" className="flex pt-4 gap-4">
            <div className="btn-calculadora">0</div>
            <div className="btn-calculadora w-full bg-orange-500 hover:bg-orange-400">
              =
            </div>
          </div>
        </div>

        <div id="operations" className="flex flex-col gap-4">
          <div className="btn-calculadora">+</div>
          <div className="btn-calculadora">-</div>
          <div className="btn-calculadora pt-2">*</div>
          <div className="btn-calculadora">/</div>
        </div>
      </div>
    </div>
  );
}
