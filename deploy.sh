set -e

npm run build

cd dist

echo > .nojekyll

git init
git checkout -8 main
git add -A
git commit -m "deploy" 

cd -