INSERT INTO rentaldb.users (email, password) 
VALUES ('Brian@gmail.com', '123');

INSERT INTO rentaldb.properties (theState, theAddress, starred, purchased) 
VALUES ('CA', 'firstPlace', TRUE, false), ('CA', 'secondSpot', TRUE, TRUE), ('CA', 'thirdLocation', false, TRUE);

/*
-----These are extra users-----
INSERT INTO rentaldb.users (email, password) values ('Rover@gmail.com', '456');
INSERT INTO rentaldb.users (email, password) values ('Mott@gmail.com', '789');
*/