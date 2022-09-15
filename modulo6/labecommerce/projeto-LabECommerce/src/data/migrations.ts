import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users (
         id_user VARCHAR(255) PRIMARY KEY,
         name_user VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL UNIQUE,
         password VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_products (
         id_prod VARCHAR(255) PRIMARY KEY,
         name_prod VARCHAR(255) NOT NULL,
         price float NOT NULL,
         image_url VARCHAR(255) NOT NULL
      );
      CREATE TABLE IF NOT EXISTS labecommerce_purchases (
         id_purch VARCHAR(255) PRIMARY KEY,
         user_id VARCHAR(255) NOT NULL,
         FOREIGN KEY (user_id) REFERENCES labecommerce_users(id_user),
         product_id VARCHAR(255) NOT NULL,
         FOREIGN KEY (product_id) REFERENCES labecommerce_products(id_prod),
         quantity INT NOT NULL,
         total_price float NOT NULL
      );
   `)
   .then(() => { console.log("Tabelas criadas com sucesso") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(() => console.log("Banco está pronto!"))
   .finally(closeConnection)
