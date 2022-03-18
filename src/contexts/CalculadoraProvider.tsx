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

export const useCalculadora = () => {
  const context = useContext(CalculadoraContext);
  return context;
};

export function CalculadoraProvider(props: any) {
  const [calculo, setCalculo] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calculate = () => {
    const strSplit = calculo.split(" ");
    const strSem0NoInicio = strSplit
      .map((numero) =>
        numero[0] === "0" ? numero.slice(1, numero.length) : numero
      )
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
