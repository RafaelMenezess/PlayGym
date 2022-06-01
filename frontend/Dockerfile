FROM node:17.9.0-alpine
WORKDIR /code/frontend

COPY package.json package-lock.json ./
RUN npm install 
COPY . ./frontend
EXPOSE 3000
