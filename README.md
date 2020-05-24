# webpack-basic
学习webpack4.0.基础构建。

## 1.1 webpack is module bundler   模块打包工具
## 1.2 npm init     项目内部安装webpack   npm i webpack webpack-cli  -D 
### npx webpack -v  帮助我们在项目内部查找模块依赖    
### npm ls   npm ls -depth 0   查看安装的包
### npm info webpack    npm view jquery versions   查看webpack 都有哪些版本  
### npm uninstall 模块名
### npm i webpack@4.26.0   webpack-cli@3.1.2 -D

### --save || -S // –save ： dependencies 发布后还需要依赖的模块 

### 模块写入dependencies节点。
### npm install 初始化项目时，会将模块下载到项目目录下。
### npm install --production或者注明NODE_ENV变量值为production时，会自动下载模块到node_modules目录中


###  –save-dev || -D //devDependencies 开发时的依赖,因为我们在发布后用不到它，而只是在我们开发才用到它

### 模块写入devDependencies节点。
###  npm install 初始化项目时，会将模块下载到项目目录下。
###  npm install --production或者注明NODE_ENV变量值为production时，不会自动下载模块到node_modules目录中。



### 啥也没有   
### 不会将模块写入devDependencies或dependencies
###  npm install初始化项目时不会下载模块。

