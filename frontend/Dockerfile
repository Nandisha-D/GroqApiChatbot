# frontend/Dockerfile
FROM node:18-alpine

# Setting up the work directory
WORKDIR /app

# Copying package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Installing dependencies
RUN npm install

# Copying all the remaining files
COPY . .

# Exposing the server port (if needed, but not necessary for Vite)
# EXPOSE 5173

# Starting the application
CMD ["npm", "run", "dev"]
