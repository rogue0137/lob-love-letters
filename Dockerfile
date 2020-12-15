# Docker creates a computer container
# this tells Docker to get node version 14
FROM node:14
# this tells Docker that I want my directory within the computer
# container to be called /app
WORKDIR /app
# node uses package.json to manage packages
# this line says, copy my package files to the computer container
COPY package*.json ./
# the next line installs all of our packages
RUN npm install
# puts all of our files from lob-love-letters into the computer container directory /app
COPY . .

# in docker-compose.yml, we name our computer container "lob-love-letters"
