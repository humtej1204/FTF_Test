FROM node:18-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY package*.json /app/
RUN npm i

COPY . /app/

RUN npm run build

### Stage 2
FROM nginx:alpine
COPY --from=build /app/dist/web-app /usr/share/nginx/html