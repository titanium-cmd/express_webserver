FROM node:14-alpine

# set a directory for the app
WORKDIR /express_server

# copy all the files to the container
COPY . /express_server

# install dependencies
RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]