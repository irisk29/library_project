import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const userID = event.userID;
    const userName = event.userName;
    const personalID = event.personalID;

    const result = await query(`UPDATE public.\"LibraryUsers\" SET \"userName\"='${userName}', \"personalID\"='${personalID}' WHERE \"userID\"=${userID}`);
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