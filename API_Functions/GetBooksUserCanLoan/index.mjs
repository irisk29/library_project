import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const userID = event.userID;

    const result = await query(`
    SELECT DISTINCT ON (\"ID\") \"ID\", \"BookName\", \"Author\", \"Copies\"
	  FROM public.\"BookOwner\" RIGHT OUTER JOIN public.\"BooksStore\" ON \"bookID\" = \"ID\" WHERE ((\"loans\" IS NOT TRUE) AND (\"userID\"=${userID} OR \"userID\" is NULL)) OR (\"userID\" != ${userID});`);
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