import type { ConfigIn } from "@/schema/config";
import { DeepPartial } from "@/types/deep-partial";

const localDevelopment: DeepPartial<ConfigIn> = {
  baz: {
    qux: "hehee"
  }
}

export default localDevelopment;