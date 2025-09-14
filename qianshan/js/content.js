//添加千山为主页
var chrome_extension_button = document.getElementById("chrome_extension");
chrome_extension_button.style.display = "none";
var chrome_extension_tips = document.getElementById("chrome_extension_tips");
var str = "";
str += "<h4>您已安装千山插件，感谢厚爱！如有问题请检查如下设置</h4>";
str += "<p><span>如果您正在使用Chrome浏览器</span></p>";
str += "<dl class='dl-horizontal'>";
str += "<dt>检查主页</dt>";
str += "<dd>点击<span class='keywords'>设置</span>，确认<span class='keywords'>启动时</span>的设置为<span class='keywords'>打开特定网页</span></dd>";
str += "<dt>检查其他插件</dt>";
str += "<dd>您是否安装了其他导航插件，他们可能覆盖了主页和新标签页设置</dd>";
str += "</dl>";
chrome_extension_tips.innerHTML = str;

//自定义弹层
var customize_confirm_label = document.getElementById("customizeConfirmModalLabel");
customize_confirm_label.innerHTML = "建议您打开新标签页，再进行自定义操作";

var customize_confirm_sub_label = document.getElementById("customizeConfirmModalSubLabel");
customize_confirm_sub_label.innerHTML = "新标签页的自定义数据可在同一谷歌账户下，跨设备同步";

var customize_confirm_buttons_div = document.getElementById("customizeConfirmModalButtonsDiv");
customize_confirm_buttons_div.getElementsByTagName("a")[0].style.display = "none";
customize_confirm_buttons_div.getElementsByTagName("a")[1].style.display = "inherit";

var port = chrome.runtime.connect();

window.addEventListener("message", function(event){
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);
