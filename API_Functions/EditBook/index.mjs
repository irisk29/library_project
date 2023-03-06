import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const bookID = event.bookID;
    const bookName = event.bookName;
    const author = event.author;
    const copies = event.copies;

    const result = await query(`UPDATE public.\"BooksStore\" SET \"BookName\"='${bookName}', \"Author\"='${author}', \"Copies\"='${copies}' WHERE \"ID\"=${bookID}`);
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