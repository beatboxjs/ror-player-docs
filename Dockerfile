FROM httpd:2.4-alpine
MAINTAINER Candid Dauth <cdauth@cdauth.eu>

RUN apk add --no-cache nodejs yarn

COPY ./ /tmp/ror-player-docs

RUN cd /tmp/ror-player-docs && yarn install && yarn build && mv dist/* /usr/local/apache2/htdocs/ && rm -rf /tmp/ror-player-docs
