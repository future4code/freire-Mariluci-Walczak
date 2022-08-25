Exercícios de Introducao ao Sql

### Exercício 01
a) - Criar tabela de atores
b) - SHOW DATABASES - lista os bancos de dados no computador servidor MySQL, somente ao que o solicitante tem acesso.
   - SHOW TABLES - mostra as tabelas do banco de dados.  
c) - DESCRIBE Actor; - mostra a estrutura da tabela solicitada.

### Exercício 02
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES ("001", "Tony Ramos", 400000, "1948-08-25", "male");

a) -INSERT INTO Actor 
VALUES ("002", "Gloria Pires", 120000, "1963-08-23", "female");

b) - INSERT INTO Actor 
VALUES ("002", "Gloria Pires", 120000, "1963-08-23", "female");
 Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	
Código de erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
um identificador único que não receberá valores repetidos.

c) - INSERT INTO Actor (id, name, salary) VALUES(  "003", "Fernanda Montenegro", 300000,  "1929-10-19", "female" );
Error Code: 1136. Column count doesn't match value count at row 1
Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores
INSERT INTO Actor VALUES("003", "Fernanda Montenegro", 300000,  "1929-10-19", "female");
Não deu erro, pois a quantidade de colunas confere com a quantidades de valores informados.

d) - INSERT INTO Actor VALUES( "004", 400000, "1949-04-18", "male");
Error Code: 1364. Field 'name' doesn't have a default value
Código de erro: 1364. O campo 'nome' não tem um valor, por padrão precisa informar um valor.
INSERT INTO Actor VALUES( "004", "Antônio Fagundes", 400000, "1949-04-18", "male");
Não deu erro, todos os campos com seus respectivos valores informados.

e) -INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, 1979-03-26, "female");
Error Code: 1292. Incorrect date value: '1979' for column 'birth_date' 
     Código de erro: 1292. Valor de data incorreto: '1979' para a coluna 'birth_date', 
birth_date declarado como varchar, para inserir valor, precisa estar entre aspas.
INSERT INTO Actor VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
Não deu erro, coluna birth_date inserido o valor com as aspas.

f) - INSERT INTO Actor VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19","female");
     INSERT INTO Actor VALUES( "004", "Antônio Fagundes", 400000, "1949-04-18", "male");

### Exercício 03
a) - SELECT  * from Actor WHERE gender = "female";
b) - SELECT salary, name from Actor WHERE name = "Tony Ramos"; 
c) - SELECT * from Actor WHERE gender = "invalid";
     A query foi realizada corretamente, só não retornou nenhuma informação, pois não existe 
     a condição solicitada.
d) - SELECT id, name, salary from Actor WHERE salary < 500000;
e) - SELECT id, nome from Actor WHERE id = "002"; 
     Error Code: 1054. Unknown column 'nome' in 'field list'	
     Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
     Essa coluna não existe, nome correto dessa coluna é name
     SELECT id, name from Actor WHERE id = "002";

### Exercício 04
a) - SELECT * FROM Actor WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;
     Feito uma busca na tabela, com a condição de pegar nomes iniciando com a letra A ou J, e com salário maior que 300000, prioridade para a condição entre parenteses.
b) - SELECT * FROM Actor WHERE (name NOT LIKE "A%") AND salary > 350000 ;
c) - SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
d) - SELECT * FROM Actor WHERE  (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
      AND salary BETWEEN 350000 AND 900000;

### Exercício 05
a) - Tabela de filmes, composta por id, titulo, sinopse, data de lançamento, avaliação.
     Tabela de Filmes tem um tipo Text, que permite incluir mais caracteres do que um tipo Varchar.

b) - INSERT INTO Movie 
     VALUES ("001", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7);

c) - INSERT INTO Movie 
     VALUES ("002", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10);

d) -INSERT INTO Movie 
     VALUES ("003", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce", "2017-11-02", 8);

e) - INSERT INTO Movie 
     VALUES ("004", "Deus é Brasileiro", "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo", "2003-01-31", 9);

### Exercício 06
a) - SELECT id, title, rating FROM Movie WHERE id = "002";
b) - SELECT * FROM Movie WHERE title = "Deus é Brasileiro";
c) - SELECT id, title, synopsis, rating FROM Movie WHERE rating > 7;

### Exercício 07
a) - SELECT * FROM Movie WHERE title LIKE "%vida%"; 
     Não conseguiu encontrar a palavra no título.

b) - SELECT * FROM Movie WHERE title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%";
     Não conseguiu encontrar nenhuma informação para a busca solicitada

c) - SELECT * FROM Movie WHERE release_date < "2020-05-04";

d) - SELECT * FROM Movie WHERE release_date < "2020-05-04" AND (title LIKE "%morte%" OR synopsis LIKE "%vida%") 
     AND  rating > 7;
