import { App } from "@serverless-stack/resources";
import { ApiStack } from "./ApiStack";
import { AuthStack } from "./AuthStack";
import { FrontendStack } from "./FrontendStack";
import { StorageStack } from "./StorageStack";

export default function main(app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  });
  app // br
    .stack(StorageStack)
    .stack(ApiStack)
    .stack(AuthStack)
    .stack(FrontendStack);
}
