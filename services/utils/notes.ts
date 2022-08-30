import { Entity, Table } from "dynamodb-toolbox";
import AWS from "aws-sdk";

const DocumentClient = new AWS.DynamoDB.DocumentClient();

const notesTable = new Table({
  name: process.env.TABLE_NAME ?? "",

  partitionKey: "pk",
  sortKey: "sk",

  DocumentClient,
});

export const Note = new Entity({
  name: "note",

  attributes: {
    userId: { partitionKey: true },
    noteId: { sortKey: true },
    content: { type: "string" },
    attachment: { type: "string" },
  },

  table: notesTable,
} as const);
