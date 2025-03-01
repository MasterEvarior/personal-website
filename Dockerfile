FROM node:22 AS builder

WORKDIR /app

COPY src/* /app/src

RUN npm install -g minify
RUN minify --all /app/src/* --output /app/dist --recursive --sync

# FROM nginx:alpine

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*

# COPY --from=builder /app/dist .
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
