FROM node:alpine
LABEL author="Olufisayo Bamidele"

WORKDIR /var/www

COPY . .

RUN  npm install || true

EXPOSE 4000

CMD [ "npm", "start" ]
