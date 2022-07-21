FROM node:16

WORKDIR /home/crudapp

RUN npm install -g @nestjs/cli

# Copy project files
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "node", "dist/main.js" ]