This repository contains the documentation for [ror-player](https://github.com/beatboxjs/ror-player).

To build the documentation, follow these steps:
1. Run `npm install`
2. Run `npm run build`
3. Find the build in the `dist/` directory.

When making changes, run `npm run dev-server` to start a temporary HTTP server that automatically rebuilds the documentation when changes are made. Run `npm run check` to make sure that there are no dead links in the documentation.

To host the documentation, either host the static build in `dist/` or run the docker image [beatboxjs/ror-player-docs](https://hub.docker.com/r/beatboxjs/ror-player-docs) using `docker run beatboxjs/ror-player-docs`. It exposes a simple HTTP server on port 80.