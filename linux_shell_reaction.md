#Linux Shell ReAction
[repo here](https://github.com/overkazaf/LinuxShellReAction.git)

##fork boom
```
example:

:(){:|:&;};:

```

>上述会创建无穷的子进程， 导致ddop，解决方法是可以通过修改
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
