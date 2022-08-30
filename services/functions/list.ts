import { APIGatewayEvent } from "aws-lambda";
import { handler, Note } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const notes = await Note.query(
    event.requestContext.authorizer?.iam.cognitoIdentity.identityId
  );

  return notes.Items;
});
