import { Attribute } from "./blog-backend/node_modules/parse5/dist/cjs/common/token.d";
import { DefaultDocumentNodeResolver } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === "post") {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
          }/api/preview`,
          defaultSize: `desktop`,
          reload: {
            button: true,
          },
          attribute: {},
        })
        .title("Preview"),
    ]);
  }
};
