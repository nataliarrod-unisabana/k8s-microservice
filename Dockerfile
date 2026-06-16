FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY src ./src

# Run as non-root for security
USER node

EXPOSE 3000

CMD ["node", "src/server.js"]
