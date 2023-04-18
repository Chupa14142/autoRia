FROM cypress/base:12

RUN mkdir /app

WORKDIR /app

COPY . /app

RUN rm -r package-lock.json && npm install  --verbose

RUN ["npm", "run", "parsePhone"]