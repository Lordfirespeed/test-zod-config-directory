import type { ConfigIn } from "@/schema/config";
import { DeepPartial } from "@/types/deep-partial";

const development: DeepPartial<ConfigIn> = {
  foo: "hiya, ",
}

export default development;