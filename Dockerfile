FROM node:18.16.0-alpine3.18

RUN mkdir /home/node/app

WORKDIR /home/node/app

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]