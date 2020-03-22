CREATE DATABASE IF NOT EXISTS `angular-prime` DEFAULT CHARACTER SET utf8 ;
USE `angular-prime` ;

DROP TABLE IF EXISTS `section`;
CREATE TABLE `section` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(1000) NOT NULL,
  `description` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;