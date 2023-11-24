FROM node:19-alpine

ENV APP_ROOT /usr/src/app
WORKDIR ${APP_ROOT}

COPY ./package*.json ./
RUN apk --no-cache add pkgconfig autoconf automake libtool nasm build-base zlib-dev

RUN yarn install

ADD ./ ${APP_ROOT}
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]