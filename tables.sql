CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT,
    password TEXT
);

CREATE TABLE IF NOT EXISTS menu (
    id SERIAL PRIMARY KEY,
    service TEXT,
    price FLOAT,
    time FLOAT
);

CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    menu_id INTEGER,
    date DATE,
    start_time FLOAT,
    end_time FLOAT,
    attendance TEXT,
    notification TEXT
);