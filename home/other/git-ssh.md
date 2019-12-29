# GIT SSH 配置 (适用各种git仓库管理网站)

1. 打开 `Git Bash.` 命令行。(linux直接适用控制台)

2. 输入命令

    ```ssh
    ssh-keygen -t rsa -C "your_email@example.com"
    ```

    > 将邮箱换成你的邮箱，一直按回车就好了。  
    > 其实直接输入 `ssh-keygen` 也是可以的，其他的默认即可。

3. 最后会在用户目录下生成 `~/.ssh/id_rsa` 和 `~/.ssh/id_rsa.pub` 文件，
    > windows用户的用户目录下.ssh目录中 `C:\Users\XXXXX\.ssh\id_rsa`

4. 在GitHub页面上的个人设置里面找到`SSH and GPG keys`，然后点击 `New SSH key`, 把刚刚创建的 `id_rsa.pub` 文件的内容添加到里面去。保存。

5. 最终大工搞成。
