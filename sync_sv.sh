#!/bin/sh
SERVER=moon
PRJ_NAME=/data/users/thomasvo/peki-admin

rsync --delete -aurv dist runservice $SERVER:$PRJ_NAME/

# /data/users/thomasvo/peki-admin