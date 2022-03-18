import { Calculadora } from "./components/Calculadora";
import { HistoricoCalculos } from "./components/HistoricoCalculos";
import { KeyboardListener } from "./components/KeyboardListener";
import { CalculadoraProvider } from "./contexts/CalculadoraProvider";

function App() {
  return (
    <div className="bg-gray-700 flex flex-col justify-center items-center h-full min-h-screen gap-16 sm:flex-row">
      <CalculadoraProvider>
        <KeyboardListener />
        <Calculadora />
        <HistoricoCalculos />
      </CalculadoraProvider>
    </div>
  );
}

export default App;
