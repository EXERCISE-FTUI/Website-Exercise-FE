FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
RUN npm install -g vite
RUN npm install --include=dev
COPY . .
EXPOSE 5173
EXPOSE 6790
EXPOSE 9229
RUN tsc -p tsconfig.json
RUN npm run build
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]