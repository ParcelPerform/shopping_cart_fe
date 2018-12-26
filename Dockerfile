FROM tritruong20/base-fe
WORKDIR /srv/fe-demo-web

COPY . ./ 
RUN npm install

#[IMPORTANT] - entrypoint to run image
ENTRYPOINT ["/srv/fe-demo-web/start.sh"]
CMD []