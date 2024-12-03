import Knex from 'knex';
import 'dotenv/config';


const {
  db_host,
  db_port,
  db_database,
  db_user,
  db_password,
} = process.env;


const config = {
  development: {
    client: 'pg',
    connection: {
      host: db_host,
      port: parseInt(db_port),
      database: db_database,
      user: db_user,
      password: db_password
    }
  }
}

console.log(config)

export const database = Knex(config['development']);
export default config;