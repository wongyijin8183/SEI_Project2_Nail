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
    date DATE,
    time TIME,
    menu_id INTEGER,
    user_id INTEGER,
    confirmed TEXT DEFAULT 'NO',
    show TEXT
);