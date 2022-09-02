

CREATE TABLE Blockly (
  executionid varchar(100) primary key,
  username VARCHAR(40),
  email VARCHAR(40),
  workspace varchar(65535),
  exercise varchar(100),
  time timestamp 
);

CREATE TABLE Code(
  executionid varchar(100) primary key,
  username VARCHAR(40),
  email VARCHAR(40),
  p5 varchar(65535),
  exercise varchar(100),
  time timestamp 
);
