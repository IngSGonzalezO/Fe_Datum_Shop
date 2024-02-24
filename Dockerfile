FROM ubi8/nodejs-18:1-94 AS build

# Set the working directory
WORKDIR /builddir

RUN npm cache clean --force

# Copy files from local machine to virtual directory in docker image
COPY . .

RUN npm install -g npm@8.0.0

RUN npm install --legacy-peer-deps

# Generate the build of the application
RUN npm run build

#WORKDIR /builddir/dist

# Stage 2: Serve app with nginx server
FROM ubi8/nginx-122:1-47

COPY --from=build /builddir/dist/angulardummy /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

CMD nginx -g "daemon off;"