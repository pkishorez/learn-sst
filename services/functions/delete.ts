import { dynamoDb, handler } from "utils";

export const main = handler(async (event: any) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123",
      noteId: event.pathParameters.id,
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});
