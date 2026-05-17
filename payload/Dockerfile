FROM node:20-slim
WORKDIR /app
# Systemove zavislosti pro sharp (libvips) a payload bundler
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 make g++ \
    && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --legacy-peer-deps; else npm install --no-audit --no-fund --legacy-peer-deps; fi
COPY tsconfig.json ./
COPY src/ src/
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/server.js"]
