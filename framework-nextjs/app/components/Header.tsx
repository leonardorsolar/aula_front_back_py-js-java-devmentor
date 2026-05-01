type HeaderProps = {
  cartCount: number;
  onOpenCart: () => void;
};

export default function Header({ cartCount, onOpenCart }: HeaderProps) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 200,
        boxShadow: "0 2px 8px rgba(0,0,0,0.12)"
      }}
    >
      <div
        style={{
          background: "#131921",
          color: "white",
          padding: "14px 16px",
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 14
        }}
      >
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            fontSize: "2rem",
            fontWeight: 700,
            color: "white",
            textDecoration: "none",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            whiteSpace: "nowrap"
          }}
        >
          produtos
          <small style={{ fontSize: "0.95rem", fontWeight: 600, marginLeft: 2 }}>
            .com.br
          </small>
        </a>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: "flex",
            minWidth: 240,
            background: "#f3f3f3",
            borderRadius: 8,
            overflow: "hidden",
            boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
          }}
          role="search"
          aria-label="Buscar produtos"
        >
          <select
            aria-label="Categoria da busca"
            defaultValue="Todos"
            style={{
              border: "none",
              background: "#e8e8e8",
              color: "#3a3a3a",
              padding: "0 10px",
              borderRadius: "8px 0 0 8px",
              fontSize: "0.82rem",
              outline: "none"
            }}
          >
            <option>Todos</option>
            <option>Eletrônicos</option>
            <option>Computadores</option>
            <option>Acessórios</option>
          </select>

          <input
            type="text"
            placeholder="Buscar produtos..."
            style={{
              flex: 1,
              padding: "10px 12px",
              border: "none",
              outline: "none",
              fontSize: "0.95rem"
            }}
          />

          <button
            type="submit"
            aria-label="Buscar"
            style={{
              background: "#febd69",
              border: "none",
              padding: "0 14px",
              borderRadius: "0 8px 8px 0",
              cursor: "pointer",
              fontSize: "1.05rem",
              fontWeight: 700
            }}
          >
            🔍
          </button>
        </form>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <div style={{ fontSize: "0.78rem", lineHeight: 1.2, color: "#e3e6e6" }}>
            Olá, faça seu login
            <br />
            <strong style={{ fontSize: "0.92rem", color: "white" }}>
              Contas e Listas
            </strong>
          </div>

          <button
            onClick={onOpenCart}
            style={{
              background: "transparent",
              border: "1px solid transparent",
              color: "white",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.95rem",
              padding: "6px 8px",
              borderRadius: 6,
              fontWeight: 700
            }}
          >
            <span style={{ fontSize: "1.35rem" }}>🛒</span>
            <span style={{ color: "#f08804", fontWeight: 700 }}>{cartCount}</span>
            Carrinho
          </button>
        </div>
      </div>

      <nav
        aria-label="Menu principal"
        style={{
          background: "#232f3e",
          color: "white",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: 18,
          overflowX: "auto",
          scrollbarWidth: "thin"
        }}
      >
        {[
          "Todos",
          "Ofertas do Dia",
          "Mais Vendidos",
          "Games",
          "Eletrônicos",
          "Prime"
        ].map((item) => (
          <a
            key={item}
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              color: "#f3f3f3",
              textDecoration: "none",
              fontSize: "0.93rem",
              whiteSpace: "nowrap",
              fontWeight: 500
            }}
          >
            {item}
          </a>
        ))}

        <div
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: 6,
            display: "flex",
            padding: 4,
            gap: 4,
            marginLeft: "auto"
          }}
        >
          {[
            { label: "Node.js", active: true },
            { label: "Python", active: false },
            { label: "Java", active: false }
          ].map((backend) => (
            <button
              key={backend.label}
              type="button"
              style={{
                background: backend.active ? "#febd69" : "transparent",
                color: backend.active ? "#0F1111" : "white",
                border: "none",
                padding: "6px 12px",
                cursor: "pointer",
                fontSize: "0.8rem",
                borderRadius: 4,
                fontWeight: 500
              }}
            >
              {backend.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
