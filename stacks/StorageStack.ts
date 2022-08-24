import { Bucket, StackContext, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }: StackContext) {
  // Create Dynamodb Table.
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  const bucket = new Bucket(stack, "Uploads");

  return { table, bucket };
}
