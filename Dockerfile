FROM node:16.20.0

WORKDIR /app
COPY package*.json /app
USER node
ENV PORT=8000
ENV PRISMA_MIGRATE_SKIP_GENERATE=true

EXPOSE 8000

CMD [ "npm", "run", "docker" ]

