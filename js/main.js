function header(){
    $.ajax({
        url: "../page/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
