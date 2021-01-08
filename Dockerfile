FROM node:alpine
LABEL author="Olufisayo Bamidele"

WORKDIR /var/www

COPY . .

RUN cd client && npm install && npm build && \
  cd .. && npm install


CMD [ "npm", "start" ]
