// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_app from "./routes/_app.tsx";
import * as $convert from "./routes/convert.tsx";
import * as $index from "./routes/index.tsx";
import * as $ConverterForm from "./islands/ConverterForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_app.tsx": $_app,
    "./routes/convert.tsx": $convert,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/ConverterForm.tsx": $ConverterForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;