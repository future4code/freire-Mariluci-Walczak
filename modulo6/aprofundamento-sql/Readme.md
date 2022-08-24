Exercícios - Aprofundamento ao Sql - 23/08/2022

### Exercício 01
a) - ALTER TABLE Actor DROP COLUMN salary;
Comando vai alterar a estrutura da tabela Actor, deletando a coluna salary. 

b) - ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Comando vai alterar a estrutura da tabela Actor, substituindo a coluna gender por sex.

c) - ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Comando vai alterar a estrutura da tabela Actor, aumentando a quantidade de de caracteres da coluna gender, antes era VARCHAR(6), ALTERNDO PARA VARCHAR(255).

d)- ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### Exercício 02

a) - UPDATE Actor SET name = "Moacyr Franco", 	
     birth_date = "2020-02-10" WHERE id = 003";

b) -UPDATE Actor SET name = "JULIANA PÃES" WHERE  id = "005";
    UPDATE Actor SET name = "Juliana Paes" WHERE  id = "005";

c) - UPDATE Actor SET name = "Moacyr Franco", birth_date = "2020-02-10", salary = 600000,
gender = "male" WHERE id = "005";

d) - UPDATE Actor SET title "A vida é Bela" WHERE id = "008";
 Error Code: 1054. Unknown column 'title' in 'field list'
 Não reconheceu o nome da coluna, informou que a coluna é desconhecida, e deu erro na consulta.
 
### Exercício 03
a) - DELETE FROM Actor WHERE name = "Fernanda Montenegro"; não aceitou pelo nome
     DELETE FROM Actor WHERE id = "003"; consegui delatar pelo id
     o mesmo aconteceu com UPDATE exercícios acima.

b) - DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column.  To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
Após resolver opção Preferences, query executou perfeitamente.

### Exercício 04
a) - SELECT MAX(salary) FROM Actor;
b) - SELECT MIN(salary) FROM Actor WHERE gender = "female";
c) - SELECT COUNT(*) FROM Actor WHERE gender = "female";
d) - SELECT SUM(salary) FROM Actor;

### Exercício 05
a) - Query seleciona e conta todos da coluna gender, somando os que são do mesmo grupo. 

b) - SELECT id, name FROM Actor ORDER BY name DESC;

c) - SELECT name, salary FROM Actor ORDER BY salary ASC;

d) - SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;

e) - SELECT AVG(salary) gender FROM Actor GROUP BY gender;

### Exercício 06
a) - ALTER TABLE Movie ADD playing_limit_date DATE;

b) - ALTER TABLE Movie CHANGE rating rating FLOAT;

c) - UPDATE Movie SET playing_limit_date = "2020-12-31" WHERE id = "001";
     UPDATE Movie SET playing_limit_date = "2022-08-23" WHERE id = "003";
                   
d) - DELETE FROM Movie WHERE id = "004";
     SELECT synopsis From Movie WHERE id = "004";
     Query foi executada com sucesso, mais não conseguiu encontrar o id solicitado, 
     retornou linha 0. 

### Exercício 07
a) - Quantos filmes em cartaz possuem avaliações maiores do que 7.5?
     SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) Qual a média das avaliações dos filmes
   SELECT AVG(rating) FROM Movie;

c) Qual a quantidade de filmes em cartaz?
    SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d) Qual a quantidade de filmes que ainda irão lançar?
    SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

e) Qual a maior nota dos filmes?
    SELECT MAX(rating) FROM Movie;
    SELECT * FROM Movie ORDER BY rating DESC LIMIT 1;

f) Qual a menor nota dos filmes?
    SELECT MIN(rating) FROM Movie;
    SELECT * FROM Movie ORDER BY rating ASC LIMIT 1;

### Exercício 8
a) Retorne todos os filmes em ordem alfabética
   SELECT * FROM Movie ORDER BY title;

b) Retorne os 5 primeiros filmes em ordem descrente alfabética 
   SELECT * FROM Movie ORDER BY title DESC LIMIT 5;

c) Retorne os 3 filmes mais recentes em cartaz
   SELECT * FROM Movie WHERE release_date < CURDATE() 
    ORDER BY release_date DESC LIMIT 3;

d) Retorne os 3 filmes melhor avaliados
   SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;