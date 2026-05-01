export default function CartModal({ cart, total, onClose, onRemove, onCheckout }) {
  return (
    <div className="cart-overlay">
      <div className="cart-content">
        <div className="cart-header">
          <h2>Carrinho de Compras</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">Seu carrinho está vazio</div>
          ) : (
            cart.map((item, i) => (
              <div className="cart-item" key={i}>
                <img src={item.image} alt={item.name} />
                <div className="cart-item-info">
                  <div className="cart-item-title">{item.name}</div>
                  <div className="cart-item-price">
                    R$ {item.price.toFixed(2).replace(".", ",")}
                  </div>
                  <button className="remove-item" onClick={() => onRemove(i)}>
                    Excluir
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            Total: R$ {total.toFixed(2).replace(".", ",")}
          </div>
          <button className="btn-checkout" onClick={onCheckout}>
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}