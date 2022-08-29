import { dynamoDb, handler } from "utils";

export const main = handler(async (event: any) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId": "123",
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});
