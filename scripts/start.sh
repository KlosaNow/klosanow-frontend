#!/bin/bash
set -e
sudo chown ubuntu:root -R /home/ubuntu/klosanow
sudo systemctl start klosanow-app.service

sleep 5s
