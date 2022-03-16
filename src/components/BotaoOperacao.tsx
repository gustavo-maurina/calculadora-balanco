type BotaoOperacaoProps = {
  createOperacao: (valor: string) => void;
  valor: string;
};

export function BotaoOperacao({ createOperacao, valor }: BotaoOperacaoProps) {
  return (
    <div className="btn-calculadora" onClick={() => createOperacao(valor)}>
      {valor}
    </div>
  );
}
