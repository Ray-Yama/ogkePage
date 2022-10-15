//共通パーツ読み込み
$(function () {
  var file_path;
  var scripts = document.getElementsByTagName("script");
  var i = scripts.length;
  
  while (i--) {
    var match = scripts[i].src.match(/(^|.*\/)left_menu\.js$/);
    if (match) {
        file_path = match[1];
        break;
    }
  }
  
  $("#header").load("../page/include/header.html");
  //$("#side").load("side.html");
  //$("#footer").load("footer.html");
});
