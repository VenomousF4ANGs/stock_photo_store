create database if not exists stock_photo;
use stock_photo;
create table if not exists image
(
    image_id            INTEGER(10)     UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    image_name          VARCHAR(50)     NOT NULL,
    image_format        VARCHAR(5),
    image_orientation   VARCHAR(10),
    image_height        INTEGER(10),
    image_width         INTEGER(10),
    description         TEXT,
    upload_time         TIMESTAMP,
    location_1          VARCHAR(100),
    location_2          VARCHAR(100),
    FULLTEXT(description)
);
create table if not exists tag
(
    image_id            INTEGER(10)     UNSIGNED ,
    tag                 VARCHAR(50),
    type                VARCHAR(20),
    PRIMARY KEY(image_id,tag)
);