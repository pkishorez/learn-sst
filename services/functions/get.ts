import { dynamoDb, handler } from "utils";

export const main = handler(async (event: any) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: "123",
      notId: event.pathParameters.id,
    },
  };

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});
