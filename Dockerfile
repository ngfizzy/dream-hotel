FROM node:12.18
LABEL author="Olufisayo Bamidele"

WORKDIR /var/www

COPY . .

RUN cd client && npm install \
  && cd .. && npm install

# RUN  npm install || true

EXPOSE 4000

CMD [ "npm", "start" ]
