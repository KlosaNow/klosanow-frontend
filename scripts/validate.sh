#!/bin/bash

# Check if port 3001 is running
if ! nc -z localhost 3001; then
  echo "Port 3001 is not running"
  exit 1
else
  echo "Port 3001 is running"
fi