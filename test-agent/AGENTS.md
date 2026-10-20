# test-agent

Bot Development Kit (BDK) project (`@cursor/bdk`). This file is
for coding agents editing the project. The served agent's prompt is
`bot/instructions.md`.

## Loop

```bash
bdk validate --dir .
bdk info --dir . --json
bdk run --dir . --message "..."
bdk eval --dir .
npm run check
```

Run the CLI under Node, never Bun. Node 22.13+ is required (`@cursor/bdk`).

## Cloud Agent

Work in `test-agent/`, not the git root. Dependencies install with `npm ci` from this directory.

On boot the dev server is already started:

```bash
./node_modules/.bin/bdk dev --dir . --host 127.0.0.1 --port 3000
```

- Home: http://127.0.0.1:3000/
- Playground: http://127.0.0.1:3000/test-agent/playground
- Health: http://127.0.0.1:3000/v1/health

`validate`, `info`, and `call` do not need a model credential. `run`, `eval` (other than `--list`), and playground turns need `CURSOR_API_KEY`.

## Layout

- `bot/instructions.md` is the always-on prompt. Keep it short.
- `bot/tools/<name>.ts` is one tool per file. The filename is the tool name.
- `bot/lib/` is shared code. Never discovered.
- `evals/` is filesystem evals (`evals/evals.config.ts` required).
  Not `bot/evals/`. That path is ignored.

## Do not

- Grow host TypeScript for formatting, classification, or reply composition.
  That stays in instructions/skills. Host code owns auth, idempotency,
  evidence seeding, and side-effect gates.
- Add npm deps on a first cut. Stick to what `@cursor/bdk` already ships.
- Point `serve` at a parent folder during bring-up. It mounts every sibling.

## Pointers

- Package loop: `node_modules/@cursor/bdk/AGENTS.md`
- Skills: `node_modules/@cursor/bdk/skills/` (`create-agent`, `deploy`, `evals`, `hillclimb`, `debug`)
- Docs: `npx @cursor/bdk docs`
- LLM docs index: `node_modules/@cursor/bdk/dist/docs/llms.txt`
