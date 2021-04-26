FROM node:12.18-alpine
ENV NODE_ENV=production
ENV ACCESS_KEY="ECOMCAMP"
ENV TOKEN_EXPIRE=3600
ENV PORT=3303

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 3303
CMD [ "npm", "start" ]
