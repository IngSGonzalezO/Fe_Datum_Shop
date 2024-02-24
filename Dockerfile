FROM node:18 AS build

USER root

RUN mkdir -p /app

# Set the working directory
WORKDIR /app

COPY . /app

RUN npm install -g npm@8.0.0

RUN npm install --legacy-peer-deps

# Generate the build of the application
RUN npm run build

WORKDIR /app/dist

# Stage 2: Serve app with nginx server
FROM ubi8/nginx-122

RUN rm -rf /usr/share/nginx/html/*
COPY --from=compile-image /angular-app/dist /usr/share/nginx/html

CMD nginx -g "daemon off;"