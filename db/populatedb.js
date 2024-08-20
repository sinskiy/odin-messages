#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, username)
VALUES
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.POSTGRES_DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
