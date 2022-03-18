import { useEffect } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";

export function KeyboardListener() {
  const { calculo, setCalculo, calculate } = useCalculadora();

  useEffect(() => {
    try {
      calculate();
    } catch (err) {}

    const handleKeydown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.className === "numero-historico" ||
        e.key === "Shift" ||
        e.key === "Enter"
      )
        return;

      if (e.key === "Backspace")
        return setCalculo((atual) => atual.slice(0, calculo.length - 1));

      if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*")
        return setCalculo((atual) => atual + ` ${e.key} `);

      return setCalculo((atual) => atual + e.key);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [calculo]);

  return <></>;
}
