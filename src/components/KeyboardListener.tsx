import { useEffect } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";

export function KeyboardListener() {
  const { calculo, setCalculo, calculate } = useCalculadora();

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Shift") return;
      if (e.key === "Enter") return calculate();
      if (e.key === "Backspace")
        return setCalculo(calculo.slice(0, calculo.length - 1));

      if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*")
        return setCalculo((atual) => atual + ` ${e.key} `);

      setCalculo((atual) => atual + e.key);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return <></>;
}
