type SuccessViewProps = {
  onContinue: () => void;
};

export default function SuccessView({ onContinue }: SuccessViewProps) {
  return (
    <main style={{ padding: 40, textAlign: "center" }}>
      <h1>✓ Pedido confirmado!</h1>
      <button onClick={onContinue}>Continuar comprando</button>
    </main>
  );
}
