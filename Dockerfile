FROM node:8.7.0-alpine

# Create de backend directory and use it as working directory

RUN mkdir -p /srv/petdev-backend
WORKDIR /srv/petdev-backend

COPY package.json /srv/petdev-backend
COPY package-lock.json /srv/petdev-backend

RUN npm install

COPY . /srv/fanimals-backend

CMD ["npm", "run", "prod"]