FROM nginx:alpine
LABEL author="Humberto Ramírez <humberto.rjdh@gmail.com>"
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY en/ .
COPY es/ .