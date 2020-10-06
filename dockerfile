FROM node:12.16 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn
COPY . ./
RUN yarn run build

FROM node:12.16
WORKDIR /usr/src/app
EXPOSE 3000
COPY --from=build /usr/src/app ./
ENTRYPOINT [ "yarn", "run"]
CMD [ "dev" ]
