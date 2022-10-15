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

function showClock() {
   var nowTime = new Date();
   var nowHour = nowTime.getHours().toString().padStart(2, '0');
   var nowMin  = nowTime.getMinutes().toString().padStart(2, '0');
   var nowSec  = nowTime.getSeconds().toString().padStart(2, '0');
   document.getElementById("txtClock").innerHTML = nowHour + ":" + nowMin + ":" + nowSec;
}
setInterval('showClock()',1000);

window.onload = function() {
  setTimeout('navAdd();', 000);
}
function navAdd() {
  $(".openbtn").click(function () {//ボタンがクリックされたら
　　$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
　　$("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
　});

　$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
　　$(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
　　$("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
　});
}
