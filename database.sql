CREATE TABLE pictures (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300),
   "description" VARCHAR(500),
   "likes" INT DEFAULT 0
);

INSERT INTO pictures ("path", "description")
VALUES ('images/andy8.jpg', 'Andy when he was a little guy'), 
('images/andy7.jpg', 'A windy selfie of Andy taken in Tennessee'),
('images/andy4.jpg', 'Ominous photo of Andy in costume for a play'), 
('images/andy5.jpg', 'Andy in his favorite jacket'), 
('images/andy3.jpg', 'Andy when he was working at a call center'), 
('images/andy1.jpg', 'Andy in Oregon doing a cute pose'), 
('images/andy6.jpg', 'Andy in his favorite sweater'),
('images/andy9.jpg', 'Andy looking cool and gaming with a hat on'),
('images/andy2.jpg', 'Andy with his dog mean muggin');
