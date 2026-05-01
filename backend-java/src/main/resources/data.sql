INSERT INTO products (name, price)
SELECT 'Notebook Gamer', 3500
WHERE NOT EXISTS (
    SELECT 1 FROM products WHERE name = 'Notebook Gamer'
);

INSERT INTO products (name, price)
SELECT 'Mouse RGB', 120
WHERE NOT EXISTS (
    SELECT 1 FROM products WHERE name = 'Mouse RGB'
);

INSERT INTO products (name, price)
SELECT 'Teclado Mecânico', 250
WHERE NOT EXISTS (
    SELECT 1 FROM products WHERE name = 'Teclado Mecânico'
);
