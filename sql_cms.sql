create database cms;
use cms;

create table cadastro
(
id_cadastro int not null auto_increment primary key ,
nome varchar(60) not null,
sobrenome varchar(60) not null,
email varchar(60) not null,
senha varchar(60)not null
);

insert into cadastro (nome, sobrenome, email, senha) values

("Fabio",  "alexandre",  "fabiosk8@gmail.com",  "abc123"),
("ale",  "alexandre", "ale@gmail.com",  "abc124"),
("lucicleide",  "alexandre", "lucicleide@gmail.com",  "abc125"),
("lukinhas",  "alexandre", "mcbrinquedohaha@gmail.com", "abc126"),
("pato",  "alexandre", "patodonalds@gmail.com", "abc127");

drop database cms;