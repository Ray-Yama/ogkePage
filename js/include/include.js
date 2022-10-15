//共通パーツ読み込み
$(function () {
  let url = location.href;
  var filename = path.split("/").reverse()[0];
  var pPath =='';
  
  if (filename == "index.html") {
    // URLが http://hoge.com/ の場合に実行する処理 
  }
  else {
    pPath = '../';
  }
  
  $("#header").load(pPath + "page/include/header.html");
  //$("#side").load(pPath + "page/include/side.html");
  //$("#footer").load(pPath + "page/include/footer.html");
});
