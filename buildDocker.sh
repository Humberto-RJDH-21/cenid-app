#!/bin/bash
# Author="Humberto Ramírez Juárez <humberto.rjdh@gmail.com>" 
rm -r dist
npm run build-locale
cp Dockerfile dist/
cp nginx.conf dist/
cd dist 
docker rmi unsis/cenid-frontend:1.0
docker image build -t unsis/cenid-frontend:1.0 .