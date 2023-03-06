import { query } from './db.mjs';

export const handler = async (event, context) => {
  try {
    const userName = event.userName;
    const personalID = event.personalID;
    const result = await query(`INSERT INTO public.\"LibraryUsers\" (\"userName\", \"personalID\") VALUES ('${userName}', '${personalID}')`);
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