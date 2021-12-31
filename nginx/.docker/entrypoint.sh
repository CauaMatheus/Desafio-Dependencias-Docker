#!/bin/bash

dockerize -wait http://app:3333 -timeout 70s

nginx -g "daemon off;"