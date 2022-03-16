-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS rocks;

CREATE TABLE rocks (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    crystal_system TEXT NOT NULL,
    hardness TEXT NOT NULL
);

INSERT INTO 
    rocks (name, crystal_system, hardness)
VALUES
    ('pyrite', 'cubic', 6),
    ('labradorite', 'triclinic', 6),
    ('amethyst', 'trigonal', 7);

