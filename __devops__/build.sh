#!/bin/bash

yarn build;
cp ./dist/index.html ./dist/404.html;
yarn push;
