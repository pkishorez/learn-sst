import util from "util";
import AWS from "aws-sdk";

let logs: any;

AWS.config.logger = { log: debug };
export default function debug(...args: any) {
  logs.push({
    date: new Date(),
    string: util.format.apply(null, args),
  });
}

export function init(event: any) {
  logs = [];

  // Log API event
  debug("API event", {
    body: event.body,
    pathParameters: event.pathParameters,
    queryStringParameters: event.queryStringParameters,
  });
}

export function flush(e: any) {
  logs.forEach(({ date, string }: any) => console.debug(date, string));
  console.error(e);
}
