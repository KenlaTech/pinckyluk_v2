FROM node:20

WORKDIR /myapp
COPY package.json .
RUN npm install

EXPOSE 3000

COPY . .
CMD ["npm", "start"]