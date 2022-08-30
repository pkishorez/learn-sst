import { APIGatewayEvent } from "aws-lambda";
import * as uuid from "uuid";
import { handler, Note } from "../utils";

export const main = handler(async (event: APIGatewayEvent) => {
  const data = JSON.parse(event.body ?? "");

  const note = await Note.put(
    {
      userId: event.requestContext.authorizer?.iam.cognitoIdentity.identityId, // The id of the author,
      noteId: uuid.v1(),
      content: data.content,
      attachment: data.attachment,
    },
    { returnValues: "ALL_OLD" }
  );

  return note.Attributes;
});
