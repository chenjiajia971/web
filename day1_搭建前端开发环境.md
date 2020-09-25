搭建前端开发环境

一、安装浏览器 -- Google Chrome 

​		1、到Google chrome 官网下载并安装最新版的 Chrome 浏览器。

二、安装 JavaScript 运行时 -- Node

​		1、Node.js : 下载网站为：官网https://nodejs.org/zh-cn/下载。

		安装完成测试：node -v 
		            npm -v

![image-20200925131750351](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925131750351.png)

![image-20200925131811702](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925131811702.png)

 	  2、查看环境变量：path

​       3、配置 NPM：是javascript的包管理工具，也是目前Node.js默认的包管理工具。一般下载了Node.js后会附带npm，不用专门的去下载。

​		 npm config set prefix "D:\Program Files\nodejs\node_global" npm config set cache 			   		 "D:\Program Files\nodejs\node_cache"

​		4、配置国内镜像源：:

​				npm config set registry https://registry.npm.taobao.org

​		注意：一定要设置好国内镜像源！

三、安装编辑器 -- Visual Studio Cod

​		1、安装 Visual Studio Cod ：官网https://code.visualstudio.com/下载并安装最新版本 Visual Studio Code。

![image-20200925131904280](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925131904280.png)

​		2、安装插件：

​      （1） 简体中文语言包（Chinese (Simplified) Language Pack for VS Code）：https://marketplace.visualstudio.com/items?ite mName=MS-CEINTL.vscode-language-pack-zh-hans 

​		(2） 前端插件包（Frontend Extension Pack）：https://marketplace.visualstudio.com/items?itemName=karbassi.frontend-ext ension-pack

四、安装分布式版本控制工具 -- Git

​		1、Git：是最先进的代码版本控制软件。

		 Git 官网（https://git-scm.com/downloads)下载并安装最新版的 Git。
   安装过程中注意选择：用 Visual Studio Code为 Git 的默认编辑器。（点击左下角的齿轮选择设置(或者通过快捷键:Ctrl+,直接打开)）![image-20200925132056271](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925132056271.png)



在设置的输入框搜索：Shell:windows；找到：Terminal>Integrated>Shell:windows，这一项点击在settings.json中编辑。

![image-20200925132415482](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925132415482.png)

settings.json将内容修改为："terminal.integrated.shell.windows": "C:\\tool\\Git\\bin\\bash.exe"，其中C:\\tool\\Git是我Git的安装路径。

![image-20200925132446889](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925132446889.png)



重启编辑器通过快捷键：Ctrl+~ 打开命令工具， 显示如下图既OK。

![image-20200925132508296](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200925132508296.png)

五、安装 Markdown 文档编辑器 -- Typora 

​		下载地址： www.typora.io（官网） 或者 www.typora.net(中文) ，下载并安装最新版 Typora。



