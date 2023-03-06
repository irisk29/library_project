import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const bookID = event.bookID;

    const result = await query(`
    SELECT public.\"LibraryUsers\".\"userID\", \"userName\", \"personalID\", \"bookID\"
	FROM public.\"BookOwner\" LEFT OUTER JOIN public.\"LibraryUsers\" ON public.\"LibraryUsers\".\"userID\"=public.\"BookOwner\".\"userID\" WHERE \"bookID\"=${bookID};`);
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