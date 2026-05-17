FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install --no-audit --no-fund; fi
COPY tsconfig.json ./
COPY src/ src/
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]
