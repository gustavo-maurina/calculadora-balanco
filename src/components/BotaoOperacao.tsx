type BotaoOperacaoProps = {
  createOperacao: (valor: string) => void;
  valor: string;
  id: string;
};

export function BotaoOperacao({
  createOperacao,
  valor,
  id,
}: BotaoOperacaoProps) {
  return (
    <div
      id={id}
      className="btn-calculadora"
      onClick={() => createOperacao(valor)}
    >
      {valor}
    </div>
  );
}
