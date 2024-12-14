CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    email varchar(255),
    password varchar(255)
);

CREATE TABLE permisions (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    name varchar(255)
);

CREATE TABLE user_permission (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid,
    permision_id uuid,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id),
    CONSTRAINT fk_permission FOREIGN KEY (permision_id) REFERENCES permisions(id)
);