# Host RoR Player

RoR Player is a serverless TypeScript application whose build consists of one static HTML file plus a few other static files (such as favicons and a service worker for offline access). This makes it easy to host it yourself. RoR Player is available under the [AGPL-3.0](https://www.gnu.org/licenses/agpl-3.0.en.html) license.

Perhaps you want to host a modified version with custom tunes, custom sounds or other customisations. In that case, have a look at the [configuration](./config).


## Standalone

To create the static HTML file, follow these steps:
1. Make sure you have an up-to-date version of Node.js and NPM installed.
2. Download or clone the [repository](https://github.com/beatboxjs/ror-player).
3. In the source code directory, run `npm install` to install the dependencies.
4. Run `npm run build` to build the HTML file.
5. Find the built files in the `dist` directory. Host these files on a HTTP server.

If you want to make some changes to the code and test them quickly, run `npm run dev-server` after installing the dependencies. This will start a temporary HTTP server on http://localhost:8080/ that will automatically rebuild the code every time you make a change to a file.


## Docker

A docker image is automatically built from the source code repository. It is available as [beatboxjs/ror-player](https://hub.docker.com/r/beatboxjs/ror-player) on Docker Hub. To run it, simply run `docker run beatboxjs/ror-player`. It exposes a HTTP server on port 80. Set the `TITLE` and `DESCRIPTION` environment variables to set a custom title and meta description for the served static HTML file.