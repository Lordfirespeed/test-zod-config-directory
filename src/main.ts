import * as path from "node:path";

import { loadConfig } from 'zod-config';
import { directoryAdapter } from 'zod-config/directory-adapter';
import { scriptAdapter } from 'zod-config/script-adapter';

import { configSchema } from "./schema/config";

console.log(path.join(import.meta.dirname, "config"))

const customConfig = await loadConfig({
  schema: configSchema,
  adapters: directoryAdapter({
    paths: path.join(import.meta.dirname, "config"),
    adapters: {
      extensions: [".ts", ".js"],
      adapterFactory: (filePath: string) => scriptAdapter({
        path: filePath
      })
    }
  })
});

console.log(customConfig);
