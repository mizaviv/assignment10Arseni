create database users;
use users;
CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `id_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARACTER SET = utf8 , COLLATE = utf8_general_ci ;
