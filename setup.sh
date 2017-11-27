#!/bin/bash
npm run build 
mv build react
ssh root@39.104.48.101 'rm -rf /home/skull/codes/react'
scp -r react root@39.104.48.101:/home/skull/codes/
rm -rf react
