CREATE TABLE IF NOT EXISTS UserRecipe (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    role enum ("NORMAL" or "ADMIN") DEFAULT "NORMAL" NOT NULL
);
​
CREATE TABLE IF NOT EXISTS Recipes (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(500) DEFAULT "Nova receita!",
    preparation VARCHAR(800) NOT NULL,
    created DATE NOT NULL
);
​