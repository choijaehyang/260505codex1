#!/usr/bin/env node
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const child = spawn(process.execPath, ["bin/ima2.js", "serve"], {
  cwd: root,
  stdio: "inherit",
  env: {
    ...process.env,
    IMA2_HOST: process.env.IMA2_HOST || "0.0.0.0",
    IMA2_PORT: process.env.IMA2_PORT || "3333",
  },
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 0);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
