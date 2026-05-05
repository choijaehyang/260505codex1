# Run ima2-gen in GitHub Codespaces

This repository includes a Codespaces dev container. When the codespace is created, it installs the root and UI dependencies, builds the server, builds the CLI, and builds the Vite UI.

## Start

```bash
npm run codespaces:serve
```

Open the forwarded `ima2-gen` port, usually `3333`.

## Login

For OAuth in a cloud environment, use device authentication:

```bash
npx @openai/codex login --device-auth
```

Then start the app again if it was already running:

```bash
npm run codespaces:serve
```

`codespaces:serve` binds the server to `0.0.0.0`, which is required for the GitHub Codespaces port forwarder. The app still advertises the browser URL as localhost inside its own runtime metadata.

## Rebuild

Run the same setup/build sequence used by the dev container:

```bash
npm run codespaces:build
```
