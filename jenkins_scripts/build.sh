#!/bin/sh

echo 'build docker image'

# timestamp: year-month-day-hour-minute
time=$(date "+%Y%m%d-%H%M")

echo 'current time:' $time

cd ..
docker build --no-cache -t front:$time .
