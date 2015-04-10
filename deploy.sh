#!/bin/bash

echo -e "\033[0;32mDeploying to Github...\033[0m"

# Build the project.
grunt build
cp -Rf build/ dist/

# Add changes to git.
git add -A

# Commit changes.
msg="deploying `date`"
if [ $# -eq 1 ]
then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin master
git subtree push --prefix=dist git@github.com:soycode/dorabella.git gh-pages
