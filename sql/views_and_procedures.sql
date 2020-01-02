-- VIEWS
-- They're permanently saved query results, that act like virtual tables (you can query views like any other kind of table)

-- CREATING A VIEW
-- Creates a View called italiani from the given select query: Select every column from the atleti table where nomenazione from the nazioni table is equals to "Italia"
CREATE VIEW `italiani` AS (SELECT * FROM atleti, nazioni WHERE idNazione=nazione AND nomenazione='Italia');

-- STORED PROCEDURES
-- Stored procedures: Batch of SQL Instructions Stored on the server
-- They're like functions - You can pass arguments in and you can get a return value from them
-- Different from UDF (User Defined Functions)
-- Pros: Speed, Less Network Traffic, Sharing of good practices, Ease of Maintainance, Security from direct table editing and sql injection

-- This changes the end line delimiter because stored procedure can contain more than one statement
DELIMITER $$
USE `olimpiadi`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `elencoAtleti`()
BEGIN
	SELECT * FROM colors;
END$$

DELIMITER;

-- Calling a stored procedures
CALL elencoAtleti();

-- Stored  procedure with parameters 
CREATE DEFINER=`root`@`localhost` PROCEDURE `atleti_by_eta`(in _eta int)
BEGIN
	SELECT * FROM atleti WHERE eta=_eta;
END

CALL atleti_by_eta(18);