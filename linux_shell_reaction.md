#Linux Shell ReAction
[repo here](https://github.com/overkazaf/LinuxShellReAction.git)

##fork boom
```
example:

:(){:|:&;};:

```

>上述会创建无穷的子进程， 导致ddos，解决方法是可以通过修改
/etc/security/limits.conf文件来限制最大子进程数

***

####ls并加上行号，写入out.txt中
**ls | cat -n > out.txt**

####录制终端会话
script -t 2> time.log output.session


##find commands
* find . -name "*.js"
* find . -iname "*.js"
* find . -iregex "*.\(js|html\)$"
* find . ! -name "xxx"  // 名字不为xxx的
* find . -maxdepth 12 // maxdepth和mindepth应该尽早出现， 否则会影响find命令的效率
* find . -option xxx -mtime // atime, ctime


##xargs
###将多行输入转为单行
cat xxx | xargs

###将单行转为多行
cat xxx | xargs -n 3

###排序
sort -nrk 4

* `-n` 是输出行号
* `-r` 是逆序
* `-k` 是指定列


### head & tail
* head -n N 
* tail -n N


### pushd & popd
*  pushd path  用于将路径压入栈中
*  dirs 查看当前路径栈有什么路径
*  popd 用于弹栈


### 统计文件的行数， 字符数， 单词数
* wc filename 默认输出文件的行数，单词数，字符数
* wc -l 行
* wc -w 单词
* wc -c 字符



### 正则
grep pattern filename