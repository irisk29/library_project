import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const userID = event.userID;

    const result = await query(`SELECT \"bookID\"
    FROM public.\"BookOwner\" LEFT OUTER JOIN public.\"BooksStore\" ON \"bookID\" = \"ID\" WHERE \"userID\"=${userID} AND \"loans\" IS TRUE;`);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  }
};