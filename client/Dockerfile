FROM node

RUN mkdir -p /home/node/app/client/node_modules && chown -R node:node /home/node/app/client

WORKDIR /home/node/app/client

COPY package*.json ./

USER node

RUN npm install

RUN npm prune --no-production

COPY --chown=node:node . .

EXPOSE 3000
