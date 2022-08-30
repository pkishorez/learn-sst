import { APIGatewayEvent } from "aws-lambda";
import { handler, Note } from "utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const data = JSON.parse(event.body ?? "");

  await Note.update(
    {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId,
      noteId: event.pathParameters?.id,
      attachment: data.attachment,
      content: data.content,
    },
    {
      conditions: [
        { attr: "userId", exists: true },
        { attr: "noteId", exists: true },
      ],
    }
  );

  return { status: true };
});
