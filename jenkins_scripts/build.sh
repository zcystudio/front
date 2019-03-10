#!/bin/sh

echo 'build docker image'

# timestamp: year-month-day-hour-minute
time=$(date "+%Y%m%d-%H%M")

# current dir
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo 'current time:' $time

docker build --no-cache -t front:$time $dir/..
