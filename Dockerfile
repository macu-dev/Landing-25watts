FROM debian:latest

RUN set -x \
  && apt-get update && apt install curl -y \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && apt-get install --no-install-recommends --no-install-suggests -y -qq nodejs supervisor \
  && apt-get clean && rm -rf /tmp/*

COPY supervisor.conf /etc/supervisor/conf.d/supervisor.conf
#ADD Docker/default /etc/nginx/sites-enabled/
ADD . /app


WORKDIR /app
RUN echo "Setup Configs..." \
  npm install;\ 
  # npm link gulp; \
  gulp build

EXPOSE 3000

STOPSIGNAL SIGTERM

CMD ["/usr/bin/supervisord"]