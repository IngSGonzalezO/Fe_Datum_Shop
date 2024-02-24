FROM node:18 AS build

USER root

RUN mkdir -p /builddir

# Set the working directory
WORKDIR /builddir

COPY . ./

RUN npm install -g npm@8.0.0

RUN npm install --legacy-peer-deps

# Generate the build of the application
RUN npm run build

#WORKDIR /builddir/dist

# Stage 2: Serve app with nginx server
FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=build /builddir/dist/angulardummy /usr/share/nginx/html

CMD nginx -g "daemon off;"