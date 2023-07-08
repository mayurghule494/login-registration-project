
# Stage 1: Build the frontend
FROM node:latest as build-stage
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend .
RUN npm run build

# Stage 2: Serve the frontend using Nginx
FROM nginx:latest as production-stage
COPY --from=build-stage /app/build /var/www/html
COPY frontend/nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
