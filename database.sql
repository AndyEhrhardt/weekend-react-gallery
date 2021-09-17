CREATE TABLE pictures (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300),
   "description" VARCHAR(500),
   "likes" INT DEFAULT 0
);

INSERT INTO pictures ("path", "description")
VALUES ('images/goat_small.jpg', 'A Picture of a goat'), ('images/andy_small.jpg', 'Its Andy, but smaller'), ('images/andy_windy_small.jpg', 'Its Andy, but smaller and windy.');
