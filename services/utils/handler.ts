export function handler(lambda: any) {
  return async function (event: any, callback: any) {
    let body, statusCode;

    try {
      body = await lambda(event, callback);
      statusCode = 200;
    } catch (e: any) {
      body = { error: e.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  };
}
