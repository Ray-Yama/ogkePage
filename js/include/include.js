//共通パーツ読み込み
$(function () {
    const path = location.href;
    const filename = path.split("/").reverse()[0];
    let pPath = '';

    if (filename != "") {
        pPath = '../';
    }

    $("#header").load(pPath + "page/include/header.html");
    //$("#side").load(pPath + "page/include/side.html");
    //$("#footer").load(pPath + "page/include/footer.html");
});

function showClock() {
    const nowTime = new Date();
    const nowHour = nowTime.getHours().toString().padStart(2, '0');
    const nowMin  = nowTime.getMinutes().toString().padStart(2, '0');
    const nowSec  = nowTime.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("txtClock").innerHTML = nowHour + ":" + nowMin + ":" + nowSec;
}
setInterval('showClock()',1000);
