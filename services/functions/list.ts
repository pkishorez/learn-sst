import { APIGatewayEvent } from "aws-lambda";
import { dynamoDb, handler } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    KeyConditionExpression: "userId = :userId",
    ExpressionAttributeValues: {
      ":userId":
        event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
    },
  };

  const result = await dynamoDb.query(params);

  return result.Items;
});
