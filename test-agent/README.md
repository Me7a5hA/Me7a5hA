# test-agent

Minimal BDK agent for local testing: receive a message, optionally call the
`echo` tool, and reply.

## Layout

```
test-agent/
  bot/
    agent.ts           # model + agent config
    instructions.md    # system prompt
    tools/echo.ts      # demo server tool
    hooks/memory.ts    # turn journal
  evals/
    evals.config.ts
    smoke.eval.ts      # echo smoke case
```

## Prerequisites

- Node 22.13+ (not Bun)
- A Cursor credential for model turns: `CURSOR_API_KEY`, or run `npx @cursor/bdk login`

`validate`, `info`, and `call` work without a model credential.

## Run

From this directory:

```bash
# Install (already done by bdk init)
npm install

# Typecheck + discovery checks
npm run check
npx @cursor/bdk validate --dir .
npx @cursor/bdk info --dir . --json

# Call the tool directly (no model)
npx @cursor/bdk call echo --dir . --input '{"message":"hello"}'

# One-shot model turn (needs API key / login)
npx @cursor/bdk run --dir . --message 'Please echo the text: hello-from-test-agent'

# Interactive playground
npx @cursor/bdk dev --dir .
# open http://127.0.0.1:3000/playground

# Smoke eval (needs API key / login)
npx @cursor/bdk eval --dir . --tag smoke
```

Or use the npm scripts:

```bash
npm run validate
npm run call -- echo --input '{"message":"hello"}'
npm run run -- --message 'Please echo: hello'
npm run dev
```
