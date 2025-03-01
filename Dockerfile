FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

COPY ./src .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]