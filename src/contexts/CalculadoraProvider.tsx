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

export function CalculadoraProvider(props: any) {
  const [calculo, setCalculo] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calculate = () => setResultado(eval(calculo));

  return (
    <CalculadoraContext.Provider
      value={{ resultado, setResultado, calculo, setCalculo, calculate }}
    >
      {props.children}
    </CalculadoraContext.Provider>
  );
}

export const useCalculadora = () => {
  const context = useContext(CalculadoraContext);
  return context;
};
