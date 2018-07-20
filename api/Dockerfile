# base image
FROM node

# static server 
RUN npm install -g serve

# set working directory
RUN mkdir /usr/src/app/
RUN mkdir /usr/src/app/api
WORKDIR /usr/src/app/api

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/api/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/api/package.json
RUN npm install --silent