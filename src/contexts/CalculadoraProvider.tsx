import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type CalculadoraContextProps = {
  resultado: number | null;
  setResultado: Dispatch<SetStateAction<number | null>>;
  calculo: string;
  setCalculo: Dispatch<SetStateAction<string>>;
  calculate: () => void;
};

const CalculadoraContext = createContext<CalculadoraContextProps>(
  {} as CalculadoraContextProps
);

export const useCalculadora = (): CalculadoraContextProps => {
  const context = useContext(CalculadoraContext);
  return context;
};

export function CalculadoraProvider(props: any) {
  const [calculo, setCalculo] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calculate = (): void => {
    let strSplit = calculo.split(" ");
    strSplit = strSplit.filter((str) => str !== ""); // remover espaços vazios do Array

    if (!parseFloat(strSplit[strSplit.length - 1]))
      strSplit = strSplit.slice(0, strSplit.length - 1); // remover sinais do final da string

    // remover 0 do inicio dos numeros
    const strSem0NoInicio = strSplit
      .map((numero) => (numero[0] === "0" ? numero.slice(1) : numero))
      .join("");

    setResultado(eval(strSem0NoInicio));
  };

  return (
    <CalculadoraContext.Provider
      value={{ resultado, setResultado, calculo, setCalculo, calculate }}
    >
      {props.children}
    </CalculadoraContext.Provider>
  );
}
