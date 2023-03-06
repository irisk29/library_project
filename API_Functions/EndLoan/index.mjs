import { query } from './db.mjs';

//When the exception occurs the transction restarts -> the 2 UPDATEs reverse and only what we do in the catch counts
export const handler = async (event, context) => {
  try {
    const bookID = event.bookID;
    const userID = event.userID;

    const result = await query(`
        DO $$
        BEGIN
            UPDATE public.\"BooksStore\" SET \"Copies\"=(SELECT \"Copies\" FROM public.\"BooksStore\" WHERE \"ID\"=${bookID}) + 1 WHERE \"ID\"=${bookID};
            UPDATE public.\"BookOwner\" SET loans=false WHERE \"userID\"=${userID} AND \"bookID\"=${bookID};
        EXCEPTION WHEN OTHERS THEN
            UPDATE public.\"BooksStore\" SET \"Copies\"=(SELECT \"Copies\" FROM public.\"BooksStore\" WHERE \"ID\"=${bookID}) + 1 WHERE \"ID\"=${bookID};
            DELETE FROM public.\"BookOwner\" WHERE \"userID\"=${userID} AND \"bookID\"=${bookID} AND \"loans\"=true;
        END $$`);
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