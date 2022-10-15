//共通パーツ読み込み
$(function () {
  let url = location.href;
  if (url == "https://ray-yama.github.io/ogkePage/") {
    // URLが http://hoge.com/ の場合に実行する処理 
  } 
  
  $("#header").load("../page/include/header.html");
  //$("#side").load("side.html");
  //$("#footer").load("footer.html");
});
