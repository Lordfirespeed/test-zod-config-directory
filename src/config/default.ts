import type { ConfigIn } from "@/schema/config";

const _default: ConfigIn = {
  foo: "hello",
  bar: 10,
  baz: {
    qux: "world",
    corge: "!"
  }
}

export default _default;