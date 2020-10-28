FROM mhart/alpine-node:8.12.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . .
ENV HOST d00-services-dev.idcolombia.co
ENV EUREKA_HOST d00-registry-dev.idcolombia.co
ENV PORT 3010

EXPOSE 3010
CMD npm start