import { defineTool } from "@cursor/bdk/tools";
import * as z from "zod/v4";

/**
 * Deterministic demo tool for local smoke tests.
 * Call with `bdk call echo --input '{"message":"hello"}'`.
 */
export default defineTool({
  description:
    "Echo a short message back. Use when the user asks to echo, repeat, or round-trip text.",
  execution: "server",
  effect: "read",
  inputSchema: z.object({
    message: z.string().describe("Text to echo back unchanged."),
  }),
  async execute({ message }) {
    return {
      echoed: message,
      length: message.length,
    };
  },
});
