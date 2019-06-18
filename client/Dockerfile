FROM node

RUN mkdir -p /home/node/app/client/node_modules && chown -R node:node /home/node/app/client

WORKDIR /home/node/app/client

COPY package*.json ./

RUN npm install

RUN npm prune

COPY --chown=node:node . .

EXPOSE 3000
