FROM node:14-alpine

# set a directory for the app
WORKDIR /var/app

COPY ./packge.json ./

# copy all the files to the container
COPY . .

# install dependencies
RUN npm install

EXPOSE 5000

CMD [ "npm", "start" ]