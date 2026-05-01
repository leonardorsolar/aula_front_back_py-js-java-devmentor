import { Product } from "@/app/types/product";

type CartModalProps = {
  cart: Product[];
  total: number;
  onRemoveItem: (index: number) => void;
  onCheckout: () => void;
  onClose: () => void;
};

export default function CartModal({
  cart,
  total,
  onRemoveItem,
  onCheckout,
  onClose
}: CartModalProps) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          background: "white",
          width: 500,
          padding: 20,
          borderRadius: 8
        }}
      >
        <h2>Carrinho</h2>

        {cart.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          cart.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 10
              }}
            >
              <span>{item.name}</span>
              <button onClick={() => onRemoveItem(i)}>Remover</button>
            </div>
          ))
        )}

        <h3>Total: R$ {total.toFixed(2)}</h3>

        <button onClick={onCheckout}>Finalizar Compra</button>

        <button onClick={onClose} style={{ marginLeft: 10 }}>
          Fechar
        </button>
      </div>
    </div>
  );
}
