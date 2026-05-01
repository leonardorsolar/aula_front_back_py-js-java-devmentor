export default function Header({ cartCount, onOpenCart, backend, onSwitchBackend }) {
  return (
    <header className="site-header">
      <div className="top-header">
        <span className="logo">produtos<small>.com.br</small></span>

        <div className="search-bar">
          <select className="search-select" aria-label="Categoria da busca">
            <option>Todos</option>
            <option>Eletrônicos</option>
            <option>Computadores</option>
            <option>Acessórios</option>
          </select>
          <input type="text" placeholder="Buscar produtos..." />
          <button aria-label="Buscar"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>

        <div className="header-right">
          <div className="header-chip">
            Olá, faça seu login<br /><strong>Contas e Listas</strong>
          </div>
          <button className="cart-btn" onClick={onOpenCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{cartCount}</span>
            Carrinho
          </button>
        </div>
      </div>

      <nav className="sub-header" aria-label="Menu principal">
        <a className="menu-item" href="#">Todos</a>
        <a className="menu-item" href="#">Ofertas do Dia</a>
        <a className="menu-item" href="#">Mais Vendidos</a>
        <a className="menu-item" href="#">Games</a>
        <a className="menu-item" href="#">Eletrônicos</a>
        <a className="menu-item" href="#">Prime</a>

        <div className="backend-switcher">
          {['node', 'python', 'java'].map(b => (
            <button
              key={b}
              className={`backend-btn${backend === b ? ' active' : ''}`}
              onClick={() => onSwitchBackend(b)}
            >
              {b.charAt(0).toUpperCase() + b.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}