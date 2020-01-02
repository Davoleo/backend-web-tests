-- This Statement edits a certain entry of a certain table in a certain database

-- Updates the colors table setting the colorId to 19 in rows where the colorName is "green"
UPDATE colors SET colorId=19 WHERE colorName="green";
-- Updates the atleti table setting eta to 20 and nazione to 4 where idatleta is 10
UPDATE atleti SET eta = 20, nazione = 4 WHERE idatleta=10;

-- Updates the colors table incrementing the colorId by 30
-- (By default when there's no WHERE clause the query statement will have effect on all the rows) [when in safe-update mode the query will throw an error]
UPDATE colors SET colorId=colorId+30;