drop database simple_catalog;
create database simple_catalog;
use simple_catalog;

create table products (
  id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(255) NOT NULL,
  description varchar(2000) NOT NULL,
  price DECIMAL(10, 2) NOT NULL
) ENGINE = InnoDB;

create table product_comments (
  id MEDIUMINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id MEDIUMINT,
  FOREIGN KEY (product_id) references products(id),
  comment varchar(2000) NOT NULL
) ENGINE = InnoDB;
