import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const bookID = event.bookID;
    const userID = event.userID;
    const loans = true;

    const result = await query(`
    INSERT INTO public.\"BookOwner\" (\"bookID\", \"userID\", \"loans\") VALUES ('${bookID}', '${userID}', '${loans}');
    UPDATE public.\"BooksStore\" SET \"Copies\" = (SELECT \"Copies\" FROM public.\"BooksStore\" WHERE \"ID\"='${bookID}') - 1 WHERE \"ID\"='${bookID}';`);
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