#!/bin/bash
set -e
sudo chown ubuntu:root -R /home/ubuntu/klosanow/app
sudo systemctl start klosanow-app.service

sleep 20s
