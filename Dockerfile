FROM ubuntu:18.04
RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_16.x  | bash -
RUN apt-get -y install nodejs
WORKDIR /var/www
COPY . .
EXPOSE 3000
CMD npm start
