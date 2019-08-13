FROM node:12.8.0-alpine
EXPOSE 3001
WORKDIR /var/www/
ADD package.json .
RUN npm install
ADD . .
CMD ["npm","run","prod"]