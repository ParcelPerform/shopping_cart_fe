FROM tritruong20/base-fe
WORKDIR /srv/fe-demo-web

COPY package.json ./ 
RUN npm install

