import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const result = await query("SELECT * FROM public.\"BooksStore\"");
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