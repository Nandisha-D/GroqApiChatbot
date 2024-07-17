FROM node:18-alpine

# Setting up the work directory
WORKDIR /app

# Copying package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying all the remaining files
COPY . .

# Exposing the server port
EXPOSE 3000

# Starting the application
CMD ["npm", "start"]