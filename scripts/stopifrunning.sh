#!/bin/bash

kill -9 `ps -A -o pid,cmd | grep python | tail -n 2 | head -n 1 | cut -d ' ' -f 1`
