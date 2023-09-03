### STAGE 1: Build ###
FROM node:20.5.1-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .

### STAGE 2: Run ###
FROM nginx:1.25.2-alpine
COPY --from=build /usr/src/app/dist/trading-bot-app /usr/share/nginx/html
EXPOSE 80 