npm install && npm run build   
git init
git remote add origin https://github.com/vikashchaudhary16/my-resume.git

<!-- GIT commit  -->
git add .
git commit -m 'Deploying message'
git push origin master
npm run build
npm run deploy