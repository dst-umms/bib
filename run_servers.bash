#!/bin/bash

flask run --port 7999 >&flask.log &
./server/express/node_modules/nodemon/bin/nodemon.js server/express/server.js >&express.log &
ng serve --port 8000 --proxy-config proxy.conf.json >&client.log &

wait

