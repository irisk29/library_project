import pg from 'pg';
import { getSecretValue } from './secrets-manager.mjs';

const DB_NAME = process.env.DB_NAME;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;

let client;

async function getClient() {

  const secret = await getSecretValue(process.env.SECRET_NAME);

  const { username, password } = JSON.parse(secret);
 
  client = new pg.Client({
    user: username,
    password: password,
    database: DB_NAME,
    host: DB_HOST,
    port: DB_PORT,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  await client.connect();
  return client;
}

export async function query(text, values) {
  const client = await getClient();
  const res = await client.query(text).catch((error) => {
    console.log('Error executing query statement:' + error);
  });
  await client.end();
  return res.rows;
}
