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
};

const CalculadoraContext = createContext<CalculadoraContextProps>(
  {} as CalculadoraContextProps
);

export function CalculadoraProvider(props: any) {
  const [calculo, setCalculo] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  return (
    <CalculadoraContext.Provider
      value={{ resultado, setResultado, calculo, setCalculo }}
    >
      {props.children}
    </CalculadoraContext.Provider>
  );
}

export const useCalculadora = () => {
  const context = useContext(CalculadoraContext);
  return context;
};
