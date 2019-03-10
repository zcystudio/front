#!/bin/sh

set -e

echo '########  start build docker image   ##########'

# timestamp: year-month-day-hour-minute
time=$(date "+%Y%m%d-%H%M")

echo 'current time:' $time

pwd
echo $dir

docker build --no-cache -t front:$time .

echo '#### Dump Docker image and clean build artifacts ####'

docker images

echo 'Remove Intermediate Build Images'

docker rmi $(docker images --filter "dangling=true" -q)

echo 'Dump Docker image'

docker save --output front.$time.tar front:$time

ls -al --block-size=M
