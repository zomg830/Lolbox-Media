FROM node

RUN mkdir -p /home/node/app/server/node_modules && chown -R node:node /home/node/app/server

WORKDIR /home/node/app/server

COPY package*.json ./

RUN npm install

RUN npm prune --no-production

COPY --chown=node:node . .

EXPOSE 3001
