FROM node:alpine

LABEL Mustafa Sencer Özcan <m.sencerozcan@gmail.com>

ENV PORT 3000

RUN apk add --no-cache libc6-compat

WORKDIR /opt/app

COPY package.json /opt/app
COPY yarn.lock /opt/app

RUN yarn

COPY . /opt/app

RUN yarn build

EXPOSE 3000

CMD [ "npm", "start"]
