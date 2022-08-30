import { APIGatewayEvent } from "aws-lambda";
import { dynamoDb, handler } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const params = {
    TableName: process.env.TABLE_NAME,
    Key: {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      noteId: event.pathParameters?.id,
    },
  };

  await dynamoDb.delete(params);

  return { status: true };
});
