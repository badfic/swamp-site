FROM quay.io/badfic/node:12 as build

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

FROM quay.io/badfic/nginx:1-alpine
COPY --from=build /app/dist /usr/share/nginx/html