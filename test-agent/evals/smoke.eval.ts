import { defineEval, includes } from "@cursor/bdk/evals";

export default defineEval({
  tags: ["smoke"],
  cases: [
    {
      id: "echo",
      description: "Agent calls echo and repeats the tool result.",
      async test(t) {
        await t.send('Please echo the exact text: "ping-test-agent"');
        t.succeeded();
        t.calledTool("echo");
        t.check(t.reply, includes(/ping-test-agent/i));
      },
    },
  ],
});
