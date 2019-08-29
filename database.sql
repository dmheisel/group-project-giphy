
CREATE DATABASE "giphy_search_favorites";
-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key
-- Category table
CREATE TABLE "category"
(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);
-- Default categories. You may change them :slightly_smiling_face:
INSERT INTO "category"
    ("name")
VALUES
    ('funny'),
    ('polybius'),
    ('oregon'),
    ('goat'),
    ('burrito'),
    ('orca'),
    ('organs');
CREATE TABLE "favorites"
(
    "id" SERIAL PRIMARY KEY,
    "img_link" VARCHAR (700) NOT NULL,
    "category_id" INT DEFAULT NULL
);
INSERT INTO "favorites"
    ("img_link")
VALUES
    ('https://media.giphy.com/media/fWAlzdNOQZDJMq4wRG/giphy.gif'),
    ('https://media.giphy.com/media/8tWBtp5y6hdXG/giphy.gif');