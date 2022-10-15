//共通パーツ読み込み
$(function () {
  let path = location.href;
  var filename = path.split("/").reverse()[0];
  var pPath = '';
  
  if (filename != "") {
    pPath = '../';
  }
  
  $("#header").load(pPath + "page/include/header.html");
  //$("#side").load(pPath + "page/include/side.html");
  //$("#footer").load(pPath + "page/include/footer.html");
});

function showClock1() {
   var nowTime = new Date();
   var nowHour = nowTime.getHours();
   var nowMin  = nowTime.getMinutes();
   var nowSec  = nowTime.getSeconds();
   var msg = nowHour + ":" + nowMin + ":" + nowSec;
   document.getElementById("txtClock").innerHTML = msg;
}
setInterval('showClock1()',1000);
