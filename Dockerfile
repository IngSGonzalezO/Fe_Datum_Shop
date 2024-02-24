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
FROM nginx

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/dist/angulardummy /usr/share/nginx/html

CMD nginx -g "daemon off;"