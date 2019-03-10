#!/bin/sh

dockercleanrepo() {
  docker images --no-trunc --format '{{.ID}} {{.Repository}}' \
  | grep "front" | awk '{print $1}' | xargs -t docker rmi -f
}

echo '########  start build docker image   ##########'

# timestamp: year-month-day-hour-minute
time=$(date "+%Y%m%d-%H%M")

echo 'current time:' $time

pwd
echo $dir

echo 'Clean Front Docker Repository'
dockercleanrepo

docker build --no-cache -t front .

echo '#### Dump Docker image and clean build artifacts ####'
docker images

echo 'Remove Intermediate Build Images'
docker rmi $(docker images --filter "dangling=true" -q)

echo 'Dump Docker image'
docker save --output front.tar front

echo 'Clean Front Docker Repository'
dockercleanrepo

ls -al --block-size=M


