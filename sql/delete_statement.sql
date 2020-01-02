-- Deletes row(s) from the colors table where colorId is equals to 7
DELETE FROM colors WHERE colorId=7;

-- DELETE FROM atleti WHERE nazione = <expression that returns the right nazione id> | 
-- Subquery - Nested Select Query
DELETE FROM atleti WHERE nazione = (SELECT idnazione FROM nazioni WHERE nomenazione="Svizzera");

INSERT INTO atleti VALUES (7, 'Donati', 'Marco', 23, 7), (8, 'Ferretti', 'Roberto', 18, 7);

-- Deletes all the rows in the color table
-- (By default when there's no WHERE clause the query statement will have effect on all the rows) [when in safe-update mode the query will throw an error]
DELETE FROM colors;