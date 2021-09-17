CREATE TABLE pictures (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(300),
   "description" VARCHAR(500),
   "likes" INT DEFAULT 0
);

INSERT INTO pictures ("path", "description")
VALUES ('images/andy_small.jpg', 'Andy taking a picture for his slack profile'), 
('images/andy_windy_small.jpg', 'A windy selfie of Andy taken in Tennessee'),
('images/andy_in_a_play.jpg', 'Ominous photo of Andy in costume for a play'), 
('images/andy_in_favorite_jacket.jpg', 'Andy in his favorite jacket'), 
('images/call_center_andy.jpg', 'Andy when he was working at a call center'), 
('images/cute_andy_in_oregon.jpg', 'Andy in Oregon doing a cute pose'), 
('images/mean_face_andy_with_his_dog.jpg', 'Mean face Andy with his dog'),
('images/andy_gaming.jpg', 'Andy looking cool and gaming with a hat on');
