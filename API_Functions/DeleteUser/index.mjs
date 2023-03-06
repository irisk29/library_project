import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const userID = event.userID;

    const result = await query(`
    DELETE FROM public.\"BookOwner\" WHERE \"userID\"=${userID};
    DELETE FROM public.\"LibraryUsers\" WHERE \"userID\"=${userID};`);
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