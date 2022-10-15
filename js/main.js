function header(){
    $.ajax({
        url: "../page/include/header.html",
        cache: false,
        success: function(html){
            document.write(html);
        }
    });
}
