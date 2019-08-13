FROM node:12.8.0-alpine
WORKDIR /var/www/
ADD package.json .
RUN npm install
ADD . .
CMD ["npm","run","prod"]