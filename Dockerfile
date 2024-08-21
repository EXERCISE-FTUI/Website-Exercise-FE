
FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --silent

COPY . .

RUN chown -R node /usr/src/app

USER node

RUN npm run build

EXPOSE 3104

CMD ["npm", "run", "preview"]
