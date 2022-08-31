Exercícios - Relações em SQL - 25/08/2022

### Exercício 01
a) -  Chave estrangeira (foreign key) é o campo que estabelece o relacionamento entre duas tabelas. Uma coluna corresponde à mesma coluna que é a chave.

b) - INSERT INTO Rating (id, comment, rate, movie_id)
     VALUES ("001", "Muito bom!", 7, "004");
    
c) - INSERT INTO Rating (id, comment, rate, movie_id)
     VALUES ("002", "Maravilhoso, Ótimo", 10, "006");

Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-mariluci-walczak`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	
Chave estrangeira não existe, antes banco faz uma consulta no tabela Movie, e não encontrou id selecionado.

d) - ALTER TABLE Movie DROP COLUMN Rating;

e) - DELETE FROM Movie WHERE id = "004";
Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-mariluci-walczak`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	
Em tabela que tem relacionameto com outra tabela, é impossível deletar um elemento, para que isso aconteça, antes temos que deletar todas as referências dele na outra tabela.

### Exercício 02

a) -  Criação de uma tabela que tem informação de duas tabelas.

b) - INSERT INTO MovieCast(movie_id, actor_id)
     VALUES("004","001");

c) - Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-mariluci-walczak`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`)
Chave estrangeira não existe, antes banco faz uma consulta no tabela Actor, e não encontrou id selecionado.

d) - Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-mariluci-walczak`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Não é possível deletar um elemento de um banco no qual está relacionado a outro banco.	
 
### Exercício 03
a) -  ON faz a condição do que está sendo solicitado na consulta.

b) - SELECT m.id as movie_id, title, r.rate as rating FROM Movie m
     INNER JOIN Rating r 
     ON m.id = r.movie_id;




