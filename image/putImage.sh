#!/bin/bash
#cat count | awk '{system("echo resized/dscf36'$1'.jpg >image" $1 ".uri");system("echo " ($1+1) " >count");}'
#echo 'resized/dscf3622.jpg' | curl -T - -u miguel76:oberon1306 sftp://xion.arvixe.com/home/miguel76/public_html/test/table/images/image4.uri
cat count | awk '{system("echo resized/dscf36'$1'.jpg  | curl -T - -u miguel76:oberon1306 -k sftp://xion.arvixe.com/home/miguel76/public_html/test/table/images/image" $1 ".uri");system("echo " ($1+1) " >count");}'

