FROM node:16-alpine

WORKDIR /app/client/

COPY package*.json /app/client/
RUN npm install

COPY . /app/client/

CMD ["npm", "start"]