import { Bucket, StackContext, Table } from "@serverless-stack/resources";

export function StorageStack({ stack, app }: StackContext) {
  // Create Dynamodb Table.
  const table = new Table(stack, "Notes", {
    fields: {
      pk: "string",
      sk: "string",
    },
    primaryIndex: { partitionKey: "pk", sortKey: "sk" },
  });

  const bucket = new Bucket(stack, "Uploads");

  return { table, bucket };
}
