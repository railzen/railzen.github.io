$(document).ready(function(){
  $("body").css("background-image","url(qianshan/resources/mountain.png)");
  $(window).resize(function(){
    var top_in_digits = ($(window).height() - $("div.content").outerHeight())/4;
    top_in_digits = (top_in_digits > 0)?top_in_digits:0;
    $("div.content").css({
      position:"relative",
      top:top_in_digits,
      margin:"0 auto",
      float:"none",
      display:"inherit"
    });
  });
  $(window).resize();
  $("a.website").attr("target","_blank");
  $("a.website").hover(
    function(){
      $(this).addClass("hover");
    }, function(){
      $(this).removeClass("hover");
    }
  );
  $("a.website").click(function(){
    $(this).removeClass("hover");
  });
  $("a.block-name").hover(
    function(){
      $(this).addClass('hover');
    }, function(){
      $(this).removeClass('hover');
  });
  //hotkeyListener，监听键盘快捷键，按下对应键位打开绑定的站点
  $(document).on("keydown", hotkeyListener);
  function hotkeyListener(event){
    var k = event.which || event.keyCode;
    for(var i = 13; i < 91; i++){
      if (i == k){
        var obj = $("a.hotkey" + k);
        if(obj.attr("href") != undefined){
          obj.addClass("hover");
          setTimeout(function(){
            window.open(obj.attr("href"));
            obj.removeClass("hover");
          },500);
        }
        break;
      }
    }
    return false;
  }
});
