import { Calculadora } from "./components/Calculadora";
import { HistoricoCalculos } from "./components/HistoricoCalculos";
import { KeyboardListener } from "./components/KeyboardListener";
import { CalculadoraProvider } from "./contexts/CalculadoraProvider";

function App() {
  return (
    <div className="bg-gray-700 flex flex-col justify-center items-center h-full min-h-screen gap-16">
      <p className="text-slate-200 text-2xl mt-12 lg:mt-0">
        Digite ou use a calculadora com o cursor !
      </p>
      <CalculadoraProvider>
        <div className="flex flex-col lg:flex-row gap-16">
          <KeyboardListener />
          <Calculadora />
          <HistoricoCalculos />
        </div>
      </CalculadoraProvider>
    </div>
  );
}

export default App;
