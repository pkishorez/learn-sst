import { APIGatewayEvent } from "aws-lambda";
import { dynamoDb, handler } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      notId: event.pathParameters?.id,
    },
  };

  const result = await dynamoDb.get(params);

  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});
