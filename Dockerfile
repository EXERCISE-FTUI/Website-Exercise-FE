FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g vite
COPY . .
RUN npm run build
EXPOSE 3104
CMD [ "npm", "run", "preview", "--host"]