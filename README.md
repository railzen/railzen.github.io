# railzen.github.io
[说明：](https://www.cnblogs.com/mobaids/p/11567899.html)

在Windows 中配置启动项仅是在用户登录后运行。在登录前要启动就需要将其配置为“服务”。

### 简介：

之前介绍过如何使用frp进行端口转发和二级域名自定义，方便公司进行统一管理和监控。

但在实际生产过程中，开发人员发现frpc的窗口为应用窗口，极易出现误操作而关闭应用窗口，为了解决此问题，建议将frpc注册为windows服务，方便使用。

此方法使用 [nssm(稳定版本)](https://nssm.cc/release/nssm-2.24.zip) 工具将.EXE文件注册为Windows服务

### 1. 下载并解压压缩包，使用cmd进入对应系统版本工具的路径。（请使用管理员身份运行cmd）

使用cmd进入工具路径后可键入nssm查看工具使用参数，或直接双击查看工具使用参数。

### 2. 在cmd中键入命令，进入服务编辑页面：

?

1

`nssm install serviceName`

### 3. 设置服务路径地址

如下所示点击Path，为需要注册为服务的应用选择所在路径。Starup directory将自动生成。

![](https://nssm.cc/images/install_application.png)

> 注：图中所示的Arguments参数请不要设置否则会造成服务开启失败。

### 4.设置详details

设置服务的描述信息

![](https://nssm.cc/images/install_details.png)

### 5.设置log on

勾选Allow service to interact with desktop选项

![](https://nssm.cc/images/install_logon.png)

### 5.设置I / O选项卡

在frpc文件夹下创建日志输出文件，并选择。

![](https://nssm.cc/images/install_io.png)

其他选项卡信息使用默认设置即可。

* * *

## nssm 常用命令

?

1

2

3

4

`nssm install serviceName    #安装服务`

`nssm edit serviceName       #使用GUI编辑已安装的服务`

`nssm restart serviceName    #重新启动服务`

`nssm remove serviceName     #删除已安装的服务`
