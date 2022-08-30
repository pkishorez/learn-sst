import { APIGatewayEvent } from "aws-lambda";
import { handler, Note } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  await Note.delete({
    userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
    noteId: event.pathParameters?.id,
  });

  return { status: true };
});
