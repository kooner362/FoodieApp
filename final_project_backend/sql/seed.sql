COPY public."restaurants" FROM '/vagrant/Final-Project/final_project_backend/sql/rest.csv' DELIMITER ',' CSV HEADER ;
COPY public."menuitems" FROM '/vagrant/Final-Project/final_project_backend/sql/menuitems.csv' DELIMITER ',' CSV HEADER ;
COPY public."tags" FROM '/vagrant/Final-Project/final_project_backend/sql/tags' DELIMITER ',' CSV HEADER ;

INSERT INTO restauranttags ("createdAt", "updatedAt", "tagId", "restaurantId") VALUES
  ( NOW(), NOW(), (SELECT id from tags where name='canadian'), 1),
  ( NOW(), NOW(), (SELECT id from tags where name='lounge'), 1),
  ( NOW(), NOW(), (SELECT id from tags where name='burger'), 2),
  ( NOW(), NOW(), (SELECT id from tags where name='american'), 3),
  ( NOW(), NOW(), (SELECT id from tags where name='burger'), 4),
  ( NOW(), NOW(), (SELECT id from tags where name='italian'), 5);

INSERT INTO menuitemtags ("createdAt", "updatedAt" ,"tagId", "menuitemId") VALUES
( NOW(), NOW(), (SELECT id from tags where name='burger'), 1),
( NOW(), NOW(), (SELECT id from tags where name='american'), 2),
( NOW(), NOW(), (SELECT id from tags where name='italian'), 3),
( NOW(), NOW(), (SELECT id from tags where name='seafood'), 4),
( NOW(), NOW(), (SELECT id from tags where name='steak'), 5),
( NOW(), NOW(), (SELECT id from tags where name='steak'), 6),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 7),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 8),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 9),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 10),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 11),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 12),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 13),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 14),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 15),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 16),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 17),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 18),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 19),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 20),
( NOW(), NOW(), (SELECT id from tags where name='burger'), 21),
( NOW(), NOW(), (SELECT id from tags where name='sandwich'), 22),
( NOW(), NOW(), (SELECT id from tags where name='dinner'), 23),
( NOW(), NOW(), (SELECT id from tags where name='pizza'), 24),
( NOW(), NOW(), (SELECT id from tags where name='pasta'), 3),
( NOW(), NOW(), (SELECT id from tags where name='vegeterian'), 8),
( NOW(), NOW(), (SELECT id from tags where name='vegeterian'), 20);

COPY public."users" FROM '/vagrant/Final-Project/final_project_backend/sql/users.csv' DELIMITER ',' CSV HEADER ;
COPY public."menuitemratings" FROM '/vagrant/Final-Project/final_project_backend/sql/menuitemratings.csv' DELIMITER ',' CSV HEADER ;

DELETE FROM menuitemratings T1 USING menuitemratings T2
WHERE  T1."ctid"    < T2."ctid"       -- select the "older" ones
  AND  T1."userId"    = T2."userId"       -- list columns that define duplicates
  AND  T1."menuitemId" = T2."menuitemId";

ALTER SEQUENCE menuitemratings_id_seq RESTART 1401;
ALTER SEQUENCE menuitems_id_seq RESTART 25;
ALTER SEQUENCE restaurants_id_seq RESTART 6;