#!/bin/bash

mkdir -p ./src/dependencies

rm -rf ./src/dependencies/protocol
rm -rf ./src/dependencies/price-feed
rm -rf ./src/dependencies/governance

cp -r ../protocol/types ./src/dependencies/protocol
cp -r ../price-feed/types ./src/dependencies/price-feed
cp -r ../governance/types ./src/dependencies/governance