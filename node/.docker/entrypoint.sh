#!/bin/bash

dockerize -wait tcp://db:3306 -timeout 60s

npm i

node src/index.js
