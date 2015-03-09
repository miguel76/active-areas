#!/bin/bash
cat count | awk '{system("echo resized/dscf36'$1'.jpg >image" $1 ".uri");system("echo " ($1+1) " >count");}'
