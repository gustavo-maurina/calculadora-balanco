import { useEffect } from "react";
import { useCalculadora } from "../contexts/CalculadoraProvider";

const ALLOWED_KEYS = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "/",
  "*",
  "Backspace",
];

export function KeyboardListener() {
  const { calculo, setCalculo, calculate } = useCalculadora();

  useEffect(() => {
    try {
      calculate();
    } catch (err) {}

    const handleKeydown = (e: KeyboardEvent) => {
      console.log(e.key);

      if (
        document.activeElement?.className === "numero-historico" ||
        !ALLOWED_KEYS.includes(e.key)
      )
        return;

      if (e.key === "Backspace")
        return setCalculo((atual) =>
          atual[atual.length - 1] === " "
            ? atual.slice(0, calculo.length - 3)
            : atual.slice(0, calculo.length - 1)
        );

      if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*")
        return setCalculo((atual) => atual + ` ${e.key} `);

      return setCalculo((atual) => atual + e.key);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [calculo]);

  return <></>;
}
