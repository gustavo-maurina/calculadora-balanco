import { useEffect } from "react";
import { ALLOWED_KEYS } from "../constants/allowedKeys";
import { useCalculadora } from "../contexts/CalculadoraProvider";

export function KeyboardListener() {
  const { calculo, setCalculo, calculate } = useCalculadora();

  useEffect(() => {
    try {
      calculate();
    } catch (err) {}

    const highlightKey = (key: string): void => {
      const button = document.getElementById(key);
      button!.classList.add("pressed");
      setTimeout(() => {
        button!.classList.remove("pressed");
      }, 300);
    };

    // se for número, remove 1, se for espaço vazio(operação) remove 3
    const handleBackspacePress = (): void =>
      setCalculo((atual) =>
        atual[atual.length - 1] === " "
          ? atual.slice(0, calculo.length - 3)
          : atual.slice(0, calculo.length - 1)
      );

    const handleKeydown = (e: KeyboardEvent): void => {
      if (
        document.activeElement?.className === "numero-historico" ||
        !ALLOWED_KEYS.includes(e.key)
      )
        return;

      if (e.key !== "Backspace") highlightKey(e.key);
      if (e.key === "Backspace") return handleBackspacePress();
      if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "*")
        return setCalculo((atual) => atual + ` ${e.key} `);

      setCalculo((atual) => atual + e.key);
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [calculo]);

  return <></>;
}
