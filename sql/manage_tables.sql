show databases;
use test;

/*
Creates a table called "colors" in the database called "test"
This table has 3 columns:
1) The Unique ID (CANNOT be null) [Assigned as Primary key on line 15]
2) The Name of the color
3) The Hex Key 
*/
CREATE TABLE `test`.`colors` (
  `colorId` INT NOT NULL,
  `colorName` VARCHAR(45) NULL,
  `colorHex` VARCHAR(45) NULL,
  PRIMARY KEY (`colorId`));
show tables;

CREATE TABLE `test`.`temp` (
  `idTemp` INT NOT NULL AUTO_INCREMENT,
  `tempName` VARCHAR(45) NULL,
  `tempQuantity` VARCHAR(45) NULL,
  PRIMARY KEY (`idTemp`));
  -- ^^^ Assigns the primary key of the table to a certain column

-- The UNIQUE Constraint: Ensures there's no duplicate values in a column
  CREATE TABLE sample(
    id INT, 
    name VARCHAR(60), 
    color VARCHAR(60), 
    PRIMARY KEY(id), 
    UNIQUE(name));

-- Using FOREIGN KEY to link two tables
-- Foreign Keys hold an id reference to a row of another table
-- Parent Table
CREATE TABLE department(
  did INT, 
  name VARCHAR(10), 
  PRIMARY KEY(did));

-- Child Table
CREATE TABLE student(
  id INT, 
  name VARCHAR(40), 
  department int, 
  PRIMARY KEY(id), 
  FOREIGN KEY(department) REFERENCES department(did));
  ---- ^     
  
-- The Not Null Constraint
CREATE TABLE employee(
  id INT, 
  name VARCHAR(30), 
  last_name VARCHAR(30) NOT NULL, -- Ensures the last name is not null
  PRIMARY KEY(id));

-- Auto-Increment
-- When Inserting new records into the table we can skip the Primary Key that will be automatically assigned at the last PK incremented by one
CREATE TABLE sample(id INT AUTO_INCREMENT,  -- Allows you avoid inserting the field every time, autoincrementing it from the last row
  name VARCHAR(20),
  PRIMARY KEY(id));

-- Change the auto_increment step of a table
ALTER TABLE sample AUTO_INCREMENT=10;

-- Default Values
CREATE TABLE default_sample(
  id INT, 
  name VARCHAR(33), 
  city VARCHAR(10) DEFAULT"Tokyo"); -- If nothing is assigned to the city field, it will automatically fallback on the Default Value

-- Empties temp table completely (Deleting and recreating the table)
TRUNCATE temp;
-- Empties temp table completely (Deleting the entries one by one)
DELETE FROM temp;

-- Used to delete a table
DROP TABLE temp;

-- Returns a visual structure of a table
DESCRIBE colors;

/*
+-----------+-------------+------+-----+---------+-------+
| Field     | Type        | Null | Key | Default | Extra |
+-----------+-------------+------+-----+---------+-------+
| colorId   | int(11)     | NO   | PRI | NULL    |       |
| colorName | varchar(45) | YES  |     | NULL    |       |
| colorHex  | varchar(45) | YES  |     | NULL    |       |
+-----------+-------------+------+-----+---------+-------+
*/



-- Edits the temp table structure adding a new column called "tempTest" of type "varchar(30)" that can be null
ALTER TABLE temp add tempTest varchar(30) NULL;

-- Edits the temp table structure adding 2 new columns contemporarily
ALTER TABLE temp add tempName varchar(30) NULL, ALTER TABLE temp add tempQuantity int(100) NULL;

-- Edits the temp table structure modifying the tempQuantity column to int type and not null
ALTER TABLE temp modify tempQuantity int NOT NULL;

-- Edits the temp table structure removing the tempTest column
ALTER TABLE temp drop column tempTest;

-- Edits the temp table structure renaming the tempId column to id
ALTER TABLE temp change column idTemp id int NOT NULL;

-- Edits temp renaming it to tempTable
ALTER TABLE temp rename to tempTable;

--------- CREATE TABLE LIKE -------------
-- Used to create a table with the model of another table

-- Create a table called temp_colors with the structure of the colors table
CREATE TABLE temp_colors LIKE colors;

--------- ADD A NEW INDEX --------
-- Adds an index to the specified column
ALTER TABLE temp ADD INDEX (tempName);
-- Removes index from the specified column
ALTER TABLE temp DROP INDEX (tempName);