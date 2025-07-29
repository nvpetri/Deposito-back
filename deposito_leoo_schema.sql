
-- Tabela de Tipos de Produto
CREATE TABLE product_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Tabela de Produtos
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    product_type_id INT NOT NULL,
    stock_quantity INT DEFAULT 0,
    sale_price DECIMAL(10,2),
    purchase_price DECIMAL(10,2),
    FOREIGN KEY (product_type_id) REFERENCES product_types(id)
);

-- Tabela de Atributos Específicos dos Produtos
CREATE TABLE product_attributes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    color VARCHAR(50),
    millimeter DECIMAL(5,2),
    voltage_supported VARCHAR(50),
    luminaire_type VARCHAR(50),
    brand VARCHAR(100),
    unit VARCHAR(50),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Tabela de Movimentações de Estoque
CREATE TABLE stock_movements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    movement_type ENUM('entry', 'exit') NOT NULL,
    quantity INT NOT NULL,
    unit_price DECIMAL(10,2),
    movement_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    note TEXT,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Inserção dos Tipos de Produto em Português
INSERT INTO product_types (name) VALUES
('Cabos e fios'),
('Disjuntores'),
('Tomadas'),
('Lâmpadas, lustres e luminárias'),
('Interruptores'),
('Eletrodutos ou tubos'),
('Quadro de distribuição'),
('Bandejas elétricas'),
('Caixas de medidores'),
('Caixas de passagem'),
('Fixadores para cabos'),
('Eletrocalhas'),
('Suportes'),
('Leitos elétricos'),
('Ferramentas');
